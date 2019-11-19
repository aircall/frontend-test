import React, { useState, useEffect, Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IStore from '../IStore'
import { doGetActivitiesList } from '../actions/activity'
import ActivitiesList from '../components/organisms/ActivitiesList'

const Activity: React.FC = () => {
  const { activities, isFetching, isError } = useSelector<IStore>((state: IStore) => ({
    activities: state.activity.activities,
    isFetching: state.activity.getActivitiesListIsFetching,
    error: state.activity.getActivitiesListIsError
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doGetActivitiesList())
  }, [])
  return <div>{activities && <ActivitiesList activities={activities} />}</div>
}

export default Activity
