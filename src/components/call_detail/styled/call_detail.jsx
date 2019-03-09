import React from 'react'
import styled from 'styled-components'
import { gray33, gray87 } from 'ui_elements/colors'

const StyledCallDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  text-align: center;
  align-items: center;
`

const ContactInfo = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 18px;
`

const From = styled.div`
  font-weight: 200;
  font-size: 24px;
  color: ${gray87};
  line-height: 24px;
`

const To = styled.div`
  font-weight: 200;
  font-size: 20px;
  font-style: italic;
  color: ${gray33};
  line-height: 24px;
`

const Via = styled.div`
  font-weight: 200;
  line-height: 24px;
`

const Time = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  color: ${gray33};
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 14px;
`

const Tag = styled.div`
  margin: 8px 0;
  width: 90px;
  background-color: ${gray33};
  color: white;
  text-transform: uppercase;
  font-size: 10px;
`

const CallTime = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-top: 24px;
`

const ArchiveButton = styled.button`
  align-self: center;
  border: 1px solid ${gray33};
  padding: 8px 16px;
  margin-top: 100px;
  text-transform: uppercase;
  &:hover {
    border: 1px solid ${gray87};
  }
`

StyledCallDetail.ContactInfo = ContactInfo
StyledCallDetail.From = From
StyledCallDetail.To = To
StyledCallDetail.Time = Time
StyledCallDetail.Tag = Tag
StyledCallDetail.Via = Via
StyledCallDetail.CallTime = CallTime
StyledCallDetail.ArchiveButton = ArchiveButton

export default StyledCallDetail
