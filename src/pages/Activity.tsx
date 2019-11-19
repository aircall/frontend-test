import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IStore from '../IStore'
import { doGetActivitiesList } from '../actions/activity'

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
  return <div>{activities && <h1>{JSON.stringify(activities)}</h1>}</div>
}

export default Activity
