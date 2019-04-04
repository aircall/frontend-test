/* eslint-disable no-console */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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
  UPDATE_ACTIVITY_ERROR,
  IS_LOADING,
  IS_LOADED,
  CURRENT_NAV_IS_ALL
} from './../../../constants/types'

import { fetchActivities, archiveActivities, resetActivities, archivesActivity, fetchActivity } from './../api'

import { hostAPI } from './../../../constants/settings'

describe('[ACTIONS : ACTIVITIES]', () => {
  afterEach(() => nock.cleanAll())

  it('[fetchActivities] should return the correct payload', async () => {
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

    const expectedPayload = {
      type: FETCH_ACTIVITIES_SUCCESS,
      payload: responseMockApi
    }

    await nock(hostAPI)
      .get('/activities')
      .reply(200, responseMockApi)
    const store = mockStore({})
    await store.dispatch(fetchActivities())
    const actionsResult = store.getActions() // index 0 IS_LOADING | index 1 IS_LOADED | index 2 CURRENT_NAV_IS_ALL | index 3 FETCH_ACTIVITIES_SUCCESS

    expect(actionsResult[0]).toEqual({ type: IS_LOADING })
    expect(actionsResult[1]).toEqual({ type: IS_LOADED })
    expect(actionsResult[2]).toEqual({ type: CURRENT_NAV_IS_ALL })
    expect(actionsResult[3]).toEqual(expectedPayload)
  })

  it('[archiveActivities] should return the correct payload', async () => {
    const dataMockActivities = [
      {
        id: 7834,
        name: 'fake-data'
      }
    ]
    const responseMockApi = {
      status: 200,
      message: 'ok'
    }

    const postParams = { is_archived: true }
    await nock(hostAPI)
      .post(`/activities/${dataMockActivities[0].id}`, postParams)
      .reply(200, responseMockApi)
    const store = mockStore({})
    await store.dispatch(archiveActivities(dataMockActivities))
    const actionsResult = store.getActions() // index 0 IS_LOADING | index 1 IS_LOADED | index 2 UPDATE_ACTIVITIES_SUCCESS
    expect(actionsResult[0]).toEqual({ type: IS_LOADING })
    expect(actionsResult[1]).toEqual({ type: IS_LOADED })
    expect(actionsResult[2].type).toEqual(UPDATE_ACTIVITIES_SUCCESS)
  })

  it('[resetActivities] should return the correct payload', async () => {
    const responseMockApi = {
      status: 200,
      message: 'ok'
    }

    await nock(hostAPI)
      .get('/reset')
      .reply(200, responseMockApi)
    const store = mockStore({})
    await store.dispatch(resetActivities())
    const actionsResult = store.getActions() // index 0 IS_LOADING | index 1 IS_LOADED | index 2 RESET_ACTIVITIES_SUCCESS

    expect(actionsResult[0]).toEqual({ type: IS_LOADING })
    expect(actionsResult[1]).toEqual({ type: IS_LOADED })
    expect(actionsResult[2]).toEqual({ type: RESET_ACTIVITIES_SUCCESS, payload: [responseMockApi] })
  })

  it('[archivesActivity] should return the correct payload', async () => {
    const dataMockActivities = {
      id: 7834,
      name: 'fake-data'
    }

    const responseMockApi = {
      status: 200,
      message: 'ok'
    }

    const postParams = { is_archived: true }
    await nock(hostAPI)
      .post(`/activities/${dataMockActivities.id}`, postParams)
      .reply(200, responseMockApi)
    const store = mockStore({})
    await store.dispatch(archivesActivity(dataMockActivities.id))
    const actionsResult = store.getActions() // index 0 IS_LOADING | index 1 IS_LOADED | index 2 UPDATE_ACTIVITY_SUCCESS
    expect(actionsResult[0]).toEqual({ type: IS_LOADING })
    expect(actionsResult[1]).toEqual({ type: IS_LOADED })
    expect(actionsResult[2].type).toEqual(UPDATE_ACTIVITY_SUCCESS)
  })

  it('[fetchActivity] should return the correct payload', async () => {
    const dataMockActivities = {
      id: 7834,
      name: 'fake-data'
    }

    const responseMockApi = {
      status: 200,
      message: 'ok'
    }

    await nock(hostAPI)
      .get(`/activities/${dataMockActivities.id}`)
      .reply(200, responseMockApi)
    const store = mockStore({})
    await store.dispatch(fetchActivity(dataMockActivities.id))
    const actionsResult = store.getActions() // index 0 IS_LOADING | index 1 IS_LOADED | index 2 UPDATE_ACTIVITY_SUCCESS
    expect(actionsResult[0]).toEqual({ type: IS_LOADING })
    expect(actionsResult[1]).toEqual({ type: IS_LOADED })
    expect(actionsResult[2].type).toEqual(FETCH_ACTIVITY_SUCCESS)
  })
})
