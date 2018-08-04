
import {
  FETCH_ACTIVITY_DETAILS,
  FETCH_ACTIVITY_DETAILS_COMPLETED,
  FETCH_ACTIVITY_DETAILS_FAILED
} from '../actions/details.actions';

import { detailsReducer as reducer, initialState } from './details.reducer';

const mockActivity = {
  "id": 7834,
  "created_at": "2018-04-19T09:38:41.000Z",
  "direction": "outbound",
  "from": "Pierre-Baptiste Béchu",
  "to": "06 46 62 12 33",
  "via": "NYC Office",
  "duration": "120",
  "is_archived": false,
  "call_type": "missed"
}

describe('details reducer', () => {
  it('returns initial state by default', () => {
    expect(reducer(void 0, {})).toEqual(initialState)
  })

  it('handles FETCH_ACTIVITY_DETAILS action', () => {
    expect(reducer(void 0, {
      type: FETCH_ACTIVITY_DETAILS,
      payload: '1'
    })).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('handles FETCH_ACTIVITY_DETAILS_COMPLETED action', () => {
    expect(reducer(void 0, {
      type: FETCH_ACTIVITY_DETAILS_COMPLETED,
      payload: mockActivity
    })).toEqual({
      ...initialState,
      loading: false,
      data: mockActivity
    })
  })

  it('handles FETCH_ACTIVITY_DETAILS_FAILED action', () => {
    expect(reducer(void 0, {
      type: FETCH_ACTIVITY_DETAILS_FAILED,
      payload: 'error'
    })).toEqual({
      ...initialState,
      loading: false,
      loadError: 'error'
    })
  })
})
