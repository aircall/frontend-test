import React, { useState } from 'react'
import { IActivity } from '../../shared/api-types'
import styled from 'styled-components'

interface IActivityItemProps {
  activity: IActivity
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
`

const Title = styled.h1`
  color: black;
`

const ActivityItem: React.FC<IActivityItemProps> = ({ activity }) => {
  return (
    <Container>
      <Title>{activity.from}</Title>
    </Container>
  )
}

export default ActivityItem
