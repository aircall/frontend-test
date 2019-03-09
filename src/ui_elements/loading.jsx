import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #222;
  margin-top: 48px;
`

const Loading = () => (
  <StyledLoadingContainer>
    <FontAwesomeIcon icon="spinner" spin />
  </StyledLoadingContainer>
)

export default Loading
