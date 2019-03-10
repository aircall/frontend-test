import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { gray15, gray33 } from 'ui_elements/colors'

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${gray15};
  width: 100%;
`

const StyledBigIcon = styled(FontAwesomeIcon)`
  font-size: 30px;
  margin: 0 8px;
  cursor: pointer;
  &:hover{
    color: ${gray33};
  }
`

const StyledSmallIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin: 0 16px;
  cursor: pointer;
  &:hover{
    color: ${gray33};
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSmallIcon icon="user" />
      <StyledBigIcon icon="phone" />
      <StyledSmallIcon icon="cog" />
    </StyledFooter>
  )
}

export default Footer