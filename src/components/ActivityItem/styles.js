import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CallType = styled.div`
  width: 12px;
  height: 12px;
  background: ${props => props.type === 'missed' ? 'orange' : 'lightgreen'};
  border-radius: 6px;
`

export const CallDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  b {
    margin-bottom: 3px;
  }
`

export const Time = styled.div``

export const Activity = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, .04);
  text-decoration: none;
  color: #000;

  ${CallType} {
    margin-right: 12px;
  }
`
