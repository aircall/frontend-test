/* eslint-disable no-console */
import expect from 'expect'
import reducer from '../reducer'

import { IS_LOADING, IS_LOADED } from './../../../../constants/types'

const initialState = false

describe('[REDUCERS : LOADING]', () => {
  it('should return the initial state', () => {
    const type = null
    const newState = reducer(undefined, {
      type
    })
    const expectedResult = initialState
    expect(newState).toEqual(expectedResult)
  })

  it('should return the IS_LOADING state', () => {
    const responseMockApi = true

    const newState = reducer(undefined, {
      type: IS_LOADING,
      payload: responseMockApi
    })

    expect(newState).toEqual(responseMockApi)
  })

  it('should return the IS_LOADED state', () => {
    const newState = reducer(undefined, {
      type: IS_LOADED,
      payload: initialState
    })
    expect(newState).toEqual(initialState)
  })
})
