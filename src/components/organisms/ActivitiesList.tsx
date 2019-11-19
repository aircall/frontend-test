import React, { useState } from 'react'
import { IActivity } from '../../shared/api-types'
import ActivityItem from '../molecules/ActivityItem'
import styled from 'styled-components'
import moment from 'moment'

interface IActivitiesListProps {
  activities: IActivity[]
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: start;
`

const ActivitiesList: React.FC<IActivitiesListProps> = ({ activities }) => {
  return (
    <Container>
      {activities
        .filter((activity: IActivity) => activity.is_archived === false)
        .sort((a: IActivity, b: IActivity) => {
          return moment(b.created_at).valueOf() - moment(a.created_at).valueOf()
        })
        .map((activity: IActivity) => (
          <ActivityItem activity={activity} key={activity.id} />
        ))}
    </Container>
  )
}

export default ActivitiesList
