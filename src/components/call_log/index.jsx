import React from 'react'
import styled from 'styled-components'
import groupBy from 'lodash/groupBy'
import startOfDay from 'date-fns/start_of_day'
import useFetch from 'utils/use_fetch'
import Loading from 'ui_elements/loading'
import CallList from './call_list'

const StyledCallLog = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 100px;
  overflow-y: auto;
  height: 100%;
`

const StyledHeader = styled.h1`
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: 200;
`

const CallLog = () => {
  const { data, loading } = useFetch({ url: 'https://aircall-job.herokuapp.com/activities/' })

  if(loading || !data) return <Loading />

  const filteredData = data.filter(call => !call.is_archived)
  const groupedData = groupBy(filteredData, call => startOfDay(call.created_at))

  return (
    <StyledCallLog>
      <StyledHeader> Activities </StyledHeader>
      {Object.entries(groupedData).map(([day, calls]) => (
        <CallList key={day} day={day} calls={calls} />
      ))}
    </StyledCallLog>
  )
}

export default CallLog
