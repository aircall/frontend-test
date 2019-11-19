import React, { useState } from 'react'
import { IActivity } from '../../shared/api-types'
import styled from 'styled-components'

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
  flex-direction: column;
  padding-left: 10px;
  justify-content: center;
  cursor: pointer;
`

const Title = styled.h1`
  color: #505050;
  margin-bottom: 2px;
  font-weight: bold;
`

const Subtitle = styled.h3`
  color: #a0a0a0;
`

const ActivityItem: React.FC<IActivityItemProps> = ({ activity, onClick }) => {
  return (
    <Container onClick={() => onClick(activity.id)}>
      <Title>{activity.from}</Title>
      <Subtitle>{`tried to call on ${activity.to}`}</Subtitle>
    </Container>
  )
}

export default ActivityItem
