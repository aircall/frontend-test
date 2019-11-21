import React, { useState } from 'react'
import { IActivity } from '../../shared/api-types'
import styled from 'styled-components'
import IncomingCallLogo from '../atoms/IncomingCallLogo'
import Collapsible from 'react-collapsible'
import ArchiveLogo from '../atoms/ArchiveLogo'

interface IActivityItemProps {
  activity: IActivity
  onClick: (id: number) => void
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid;
  border-color: #e2e2e2;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  justify-content: space-between;
`

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Title = styled.h1`
  color: #505050;
  margin-bottom: 2px;
  font-weight: bold;
`

const Subtitle = styled.h3`
  color: #a0a0a0;
`

const ArchiveButtonContainer = styled.div`
  align-items: flex-end;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`

const ArchiveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 40px;
  border-radius: 40px;
  background-color: #e2e2e2;
  padding-left: 8px;
`

const ActivityItem: React.FC<IActivityItemProps> = ({ activity, onClick }) => {
  return (
    <Container>
      <LeftContainer>
        <IncomingCallLogo />
        <SubContainer>
          <Title>{activity.from}</Title>
          <Subtitle>{`tried to call on ${activity.to}`}</Subtitle>
        </SubContainer>
      </LeftContainer>
      <ArchiveButtonContainer onClick={() => onClick(activity.id)}>
        <ArchiveButton>
          <ArchiveLogo />
        </ArchiveButton>
      </ArchiveButtonContainer>
    </Container>
  )
}

export default ActivityItem
