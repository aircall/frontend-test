import { getFeed, getError, getStatus } from '../selectors';
import { FETCH_STATUS, CallsState } from '../callsSlice';

describe('selectors', () => {
  test('getFeed', () => {
    const calls: CallsState = {
      status: FETCH_STATUS.SUCCESS,
      error: null,
      ids: [7833, 7834, 7835],
      entities: {
        7833: {
          id: '7833',
          created_at: '2018-04-18T16:59:48.000Z',
          direction: 'outbound',
          from: 'Jonathan Anguelov',
          to: null,
          via: 'NYC Office',
          duration: 60,
          is_archived: false,
          call_type: 'missed',
        },
        7834: {
          id: '7834',
          created_at: '2018-04-19T09:38:41.000Z',
          direction: 'outbound',
          from: 'Pierre-Baptiste Béchu',
          to: '06 46 62 12 33',
          via: 'NYC Office',
          duration: 120,
          is_archived: false,
          call_type: 'missed',
        },
        7835: {
          id: '7834',
          created_at: '2018-04-19T09:38:41.000Z',
          direction: 'outbound',
          from: 'Pierre-Baptiste Béchu',
          to: '06 46 62 12 33',
          via: 'NYC Office',
          duration: 120,
          is_archived: true,
          call_type: 'missed',
        },
      },
    };
    expect(getFeed({ calls })).toEqual({
      'April,18 2018': { date: 'April,18 2018', ids: ['7833'] },
      'April,19 2018': { date: 'April,19 2018', ids: ['7834'] },
    });
  });
  test('getError', () => {
    const calls: CallsState = {
      status: FETCH_STATUS.ERROR,
      error: 'Timeout',
      ids: [],
      entities: {},
    };
    expect(getError({ calls })).toEqual('Timeout');
  });
  test('getStatus', () => {
    const calls: CallsState = {
      status: FETCH_STATUS.FETCHING,
      error: 'Timeout',
      ids: [],
      entities: {},
    };
    expect(getStatus({ calls })).toEqual('fetching');
  });
});
