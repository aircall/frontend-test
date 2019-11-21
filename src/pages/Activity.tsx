import React, { useState, useEffect, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IStore from '../IStore'
import { doGetActivitiesList, doUpdateActivity } from '../actions/activity'
import ActivitiesList from '../components/organisms/ActivitiesList'
import { IActivity } from '../shared/api-types'

const Activity: React.FC = () => {
  const [activitiesList, setActivitiesList] = useState()
  const { activities, isFetching, error, isUpdateActivityFetching } = useSelector<IStore>(
    (state: IStore) => ({
      activities: state.activity.activities,
      isFetching: state.activity.getActivitiesListIsFetching,
      error: state.activity.getActivitiesListIsError,
      isUpdateActivityFetching: state.activity.updateActivityIsFetching
    })
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doGetActivitiesList())
    setActivitiesList(activities)
  }, [activitiesList])

  if (isFetching) {
    return <div>Loading...</div>
  } else if (error) {
    return <div>{error}</div>
  } else if (activities && activities.length === 0) {
    return <div>No activity</div>
  }
  return (
    <div>
      {activities && (
        <ActivitiesList
          activities={activities}
          archiveAllCall={() => {
            activities.forEach((activity: IActivity) => {
              dispatch(doUpdateActivity(activity.id.toString(), true))
            })
          }}
          archiveCall={(id: number) => {
            dispatch(doUpdateActivity(id.toString(), true))
            setActivitiesList(activities)
          }}
        />
      )}
    </div>
  )
}

export default Activity
