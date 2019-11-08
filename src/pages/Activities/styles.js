import styled from 'styled-components'
import { Activity } from '../../components/ActivityItem/styles'
import { Button } from '../../components/Button/styles'

export const Header = styled.div`
  ${Button}:not(:last-child) {
    margin-right: 12px;
  }
`

export const Activities = styled.section`
  margin-top: 24px;

  ${Activity}:not(:last-child) {
    margin-bottom: 12px;
  }
`

export { PageWrapper } from '../sharedStyles'
