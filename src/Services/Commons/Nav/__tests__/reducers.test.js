/* eslint-disable no-console */
import expect from 'expect'
import reducer from '../reducer'

import { CURRENT_NAV_IS_ALL, CURRENT_NAV_IS_INBOX } from './../../../../constants/types'

const initialState = 'all'

describe('[REDUCERS : NAV]', () => {
  it('should return the initial state', () => {
    const type = null
    const newState = reducer(undefined, {
      type
    })
    const expectedResult = initialState
    expect(newState).toEqual(expectedResult)
  })

  it('should return the CURRENT_NAV_IS_INBOX state', () => {
    const responseMockApi = 'inbox'

    const newState = reducer(undefined, {
      type: CURRENT_NAV_IS_INBOX,
      payload: responseMockApi
    })

    expect(newState).toEqual(responseMockApi)
  })

  it('should return the CURRENT_NAV_IS_ALL state', () => {
    const newState = reducer(undefined, {
      type: CURRENT_NAV_IS_ALL,
      payload: initialState
    })

    expect(newState).toEqual(initialState)
  })
})
