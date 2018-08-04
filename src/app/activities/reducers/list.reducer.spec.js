import {
  FETCH_ACTIVITY_LIST,
  FETCH_ACTIVITY_LIST_COMPLETED,
  FETCH_ACTIVITY_LIST_FAILED,
} from '../actions/list.actions';

import { listReducer as reducer, initialState } from './list.reducer';

const mockActivities = [
  {
      "id": 7834,
      "created_at": "2018-04-19T09:38:41.000Z",
      "direction": "outbound",
      "from": "Pierre-Baptiste Béchu",
      "to": "06 46 62 12 33",
      "via": "NYC Office",
      "duration": "120",
      "is_archived": false,
      "call_type": "missed"
  },
  {
      "id": 7833,
      "created_at": "2018-04-18T16:59:48.000Z",
      "direction": "outbound",
      "from": "Jonathan Anguelov",
      "to": "06 45 13 53 91",
      "via": "NYC Office",
      "duration": "60",
      "is_archived": false,
      "call_type": "missed"
  }
]

describe('list reducer', () => {
  it('returns initial state by default', () => {
    expect(reducer(void 0, {})).toEqual(initialState)
  })

  it('handles FETCH_ACTIVITY_LIST action', () => {
    expect(reducer(void 0, {
      type: FETCH_ACTIVITY_LIST
    })).toEqual({
      ...initialState,
      loading: true
    })
  })

  it('handles FETCH_ACTIVITY_LIST_COMPLETED action', () => {
    expect(reducer(void 0, {
      type: FETCH_ACTIVITY_LIST_COMPLETED,
      payload: mockActivities
    })).toEqual({
      ...initialState,
      loading: false,
      data: mockActivities
    })
  })

  it('handles FETCH_ACTIVITY_LIST_FAILED action', () => {
    expect(reducer(void 0, {
      type: FETCH_ACTIVITY_LIST_FAILED,
      payload: 'error'
    })).toEqual({
      ...initialState,
      loading: false,
      loadError: 'error'
    })
  })
})
