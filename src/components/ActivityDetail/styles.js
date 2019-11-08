import styled from 'styled-components'

export const To = styled.span`
  font-size: 1.2em;
`

export const Status = styled.div`
  display: flex;
  align-items: center;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0 12px;
  margin: 0 0 12px;
  border-bottom: solid 1px rgba(0, 0, 0, .1);

  b {
    display: inline-block;
    margin-left: 12px;
    text-transform: uppercase;
  }
`

export const Details = styled.div`
  b, em, span {
    display: block;
    margin-bottom: 0.3em;
  }

  b {
    font-size: 1.3em;
  }

  em:last-child {
    margin-top: 12px;
  }
`

export const Archive = styled.div`
  margin-top: 24px;
`

export const Activity = styled.section`
  margin-top: 24px;
  padding: 10px 12px;
  border-radius: 8px;
  background: ${props => props.direction === 'inbound' ? 'lightgreen' : 'lightgray'};
`
