import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { gray15, gray33, gray87 } from 'ui_elements/colors'

const Call = styled.div`
  display: flex;
  align-items: center;
  min-height: 30px;
  border: 1px solid ${gray15};
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;

  &:not(:last-of-type){
    margin-bottom: 10px;
  }
`

const ContactInfo = styled.section`
  display: flex;
  flex-direction: column;
  line-height: 18px;
`

const From = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: ${gray87};
`

const To = styled.div`
  color: ${gray33};
  font-style: italic;
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

export const Icon = styled(FontAwesomeIcon)`
  color: ${gray33};
  margin-right: 8px;
`

Call.ContactInfo = ContactInfo
Call.From = From
Call.To = To
Call.Icon = Icon
Call.Time = Time

export default Call
