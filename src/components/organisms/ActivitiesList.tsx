import React, { useState } from 'react'
import { IActivity } from '../../shared/api-types'
import ActivityItem from '../molecules/ActivityItem'
import styled from 'styled-components'
import moment from 'moment'
import ArchiveLogo from '../atoms/ArchiveLogo'
import Collapsible from 'react-collapsible'

interface IActivitiesListProps {
  activities: IActivity[]
  archiveAllCall: () => void
  archiveCall: (id: number) => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: start;
`

const ArchiveCellContainer = styled.div`
  width: 100%;
  height: 50px;
  border: 2px solid;
  border-color: #e2e2e2;
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  padding-left: 10px;
  align-items: center;
  cursor: pointer;
`

const ArchiveTitle = styled.h1`
  color: #505050;
  margin-bottom: 2px;
  font-weight: bold;
`

const ActivitiesList: React.FC<IActivitiesListProps> = ({
  activities,
  archiveAllCall,
  archiveCall
}) => {
  return (
    <Container>
      <ArchiveCellContainer onClick={archiveAllCall}>
        <ArchiveLogo />
        <ArchiveTitle>Archive all calls</ArchiveTitle>
      </ArchiveCellContainer>
      {activities
        .filter((activity: IActivity) => activity.is_archived === false)
        .sort((a: IActivity, b: IActivity) => {
          return moment(b.created_at).valueOf() - moment(a.created_at).valueOf()
        })
        .map((activity: IActivity) => (
          <ActivityItem
            activity={activity}
            key={activity.id}
            onClick={(id: number) => archiveCall(id)}
          />
        ))}
    </Container>
  )
}

export default ActivitiesList
