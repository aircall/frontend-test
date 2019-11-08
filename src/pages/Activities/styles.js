import styled from 'styled-components'
import { Activity } from '../../components/ActivityItem/styles'

export const Activities = styled.section`
  margin-top: 24px;

  ${Activity}:not(:last-child) {
    margin-bottom: 12px;
  }
`

export { PageWrapper } from '../sharedStyles'
