import styled from 'styled-components'

export const To = styled.span`
  font-size: 1.2em;
`

export const Header = styled.div`
  padding: 0 0 12px;
  margin: 0 0 12px;
  border-bottom: solid 1px rgba(0, 0, 0, .1);

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

export const Details = styled.div`
  b {
    margin-bottom: 6px;
  }

  b, em, span {
    display: block;
    margin-bottom: 0.3em;
  }
`

export const Activity = styled.section`
  margin-top: 24px;
  padding: 10px 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, .04);
`
