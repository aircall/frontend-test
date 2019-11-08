import styled from 'styled-components'
import { Activity } from '../ActivityItem/styles'

export const Activities = styled.section`
  margin: 12px;

  ${Activity}:not(:last-child) {
    margin-bottom: 12px;
  }
`
