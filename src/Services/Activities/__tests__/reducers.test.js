/* eslint-disable no-console */
import expect from 'expect'
import reducer from '../reducer'

import {
  FETCH_ACTIVITIES_SUCCESS,
  FETCH_ACTIVITIES_ERROR,
  UPDATE_ACTIVITIES_SUCCESS,
  UPDATE_ACTIVITIES_ERROR,
  RESET_ACTIVITIES_SUCCESS,
  RESET_ACTIVITIES_ERROR,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_ERROR,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_ERROR
} from './../../../constants/types'

const initialState = {
  activities: [],
  activity: {},
  success: {
    status: false,
    message: ''
  },
  errors: {
    status: false,
    message: ''
  }
}

describe('[REDUCERS : ACTIVITIES]', () => {
  it('should return the initial state', () => {
    const type = null
    const newState = reducer(undefined, {
      type
    })

    const expectedResult = initialState
    expect(newState).toEqual(expectedResult)
  })

  it('should return the FETCH_ACTIVITIES state', () => {
    const responseMockApi = [
      {
        id: '0',
        name: 'fake-data'
      },
      {
        id: '1',
        name: 'fake-data'
      }
    ]

    const newState = reducer(undefined, {
      type: FETCH_ACTIVITIES_SUCCESS,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual(responseMockApi)
    expect(newState.success.status).toEqual(true)
    expect(newState.errors.status).toEqual(false)
  })

  it('should return the FETCH_ERROR_ACTIVITIES state', () => {
    const responseMockApi = []

    const newState = reducer(undefined, {
      type: FETCH_ACTIVITIES_ERROR,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual(responseMockApi)
    expect(newState.activity).toEqual({})
    expect(newState.success.status).toEqual(false)
    expect(newState.errors.status).toEqual(true)
  })

  it('should return the UPDATE_ACTIVITIES_SUCCESS state', () => {
    const responseMockApi = []

    const newState = reducer(undefined, {
      type: UPDATE_ACTIVITIES_SUCCESS,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual(responseMockApi)
    expect(newState.activity).toEqual({})
    expect(newState.success.status).toEqual(true)
    expect(newState.errors.status).toEqual(false)
  })

  it('should return the UPDATE_ACTIVITIES_ERROR state', () => {
    const responseMockApi = []

    const newState = reducer(undefined, {
      type: UPDATE_ACTIVITIES_ERROR,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual(responseMockApi)
    expect(newState.activity).toEqual({})
    expect(newState.success.status).toEqual(false)
    expect(newState.errors.status).toEqual(true)
  })

  it('should return the RESET_ACTIVITIES_SUCCESS state', () => {
    const responseMockApi = []

    const newState = reducer(undefined, {
      type: RESET_ACTIVITIES_SUCCESS,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual(responseMockApi)
    expect(newState.activity).toEqual({})
    expect(newState.success.status).toEqual(true)
    expect(newState.errors.status).toEqual(false)
  })

  it('should return the RESET_ACTIVITIES_ERROR state', () => {
    const responseMockApi = []

    const newState = reducer(undefined, {
      type: RESET_ACTIVITIES_ERROR,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual(responseMockApi)
    expect(newState.activity).toEqual({})
    expect(newState.success.status).toEqual(false)
    expect(newState.errors.status).toEqual(true)
  })

  it('should return the FETCH_ACTIVITY_SUCCESS state', () => {
    const responseMockApi = { id: '0', data: 'fake one item activity' }

    const newState = reducer(undefined, {
      type: FETCH_ACTIVITY_SUCCESS,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual([])
    expect(newState.activity).toEqual(responseMockApi)
    expect(newState.success.status).toEqual(true)
    expect(newState.errors.status).toEqual(false)
  })

  it('should return the FETCH_ACTIVITY_ERROR state', () => {
    const responseMockApi = {}

    const newState = reducer(undefined, {
      type: FETCH_ACTIVITY_ERROR,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual([])
    expect(newState.activity).toEqual(responseMockApi)
    expect(newState.success.status).toEqual(false)
    expect(newState.errors.status).toEqual(true)
  })

  it('should return the UPDATE_ACTIVITY_SUCCESS state', () => {
    const responseMockApi = {}

    const newState = reducer(undefined, {
      type: UPDATE_ACTIVITY_SUCCESS,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual([])
    expect(newState.activity).toEqual(responseMockApi)
    expect(newState.success.status).toEqual(true)
    expect(newState.errors.status).toEqual(false)
  })

  it('should return the UPDATE_ACTIVITY_ERROR state', () => {
    const responseMockApi = {}

    const newState = reducer(undefined, {
      type: UPDATE_ACTIVITY_ERROR,
      payload: responseMockApi
    })

    expect(newState.activities).toEqual([])
    expect(newState.activity).toEqual(responseMockApi)
    expect(newState.success.status).toEqual(false)
    expect(newState.errors.status).toEqual(true)
  })
})
