import React, { useState } from 'react'
import styled from 'styled-components'
import groupBy from 'lodash/groupBy'
import startOfDay from 'date-fns/start_of_day'
import useFetch from 'utils/use_fetch'
import Loading from 'ui_elements/loading'
import CallList from './call_list'

const StyledCollLog = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`

const CallLog = ({ showAll }) => {
  const { data, loading } = useFetch({ url: 'https://aircall-job.herokuapp.com/activities/' })

  if(loading || !data) return <Loading />

  const filteredData = data.filter(call => !call.is_archived && !showAll)
  const groupedData = groupBy(filteredData, call => startOfDay(call.created_at))

  return (
    <StyledCollLog>
      {Object.entries(groupedData).map(([day, calls]) => (
        <CallList key={day} day={day} calls={calls} />
      ))}
    </StyledCollLog>
  )
}

CallLog.defaultProps = {
  showAll: false
}

export default CallLog
