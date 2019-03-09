import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import format from 'date-fns/format'
import { gray33 } from 'ui_elements/colors'
import CallLogItem from './call_log_item'

const StyledList = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`

const StyledDay = styled.div`
  display: flex;
  justify-content: center;
  color: ${gray33};
  font-weight: 500;
  letter-spacing: 1.2px;
  margin-bottom: 8px;
`

const CallList = ({ day, calls }) => {

  return (
    <StyledList>
      <StyledDay> {format(day, 'MMMM DD, YYYY')} </StyledDay>
      {calls.map(call => <CallLogItem key={call.id} call={call} />)}
    </StyledList>
  )
}

CallList.propTypes = {
  day: PropTypes.string.isRequired,
  calls: PropTypes.arrayOf(PropTypes.object),
}

export default CallList