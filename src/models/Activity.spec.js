import Activity from './Activity';

const mockActivities = [{
  id: 7834, created_at: '2018-04-19T09:38:41.000Z', direction: 'outbound', from: 'Pierre-Baptiste Béchu', to: '06 46 62 12 33', via: 'NYC Office', duration: '120', is_archived: false, call_type: 'missed',
}, {
  id: 7833, created_at: '2018-04-18T16:59:48.000Z', direction: 'outbound', from: 'Jonathan Anguelov', to: '06 45 13 53 91', via: 'NYC Office', duration: '60', is_archived: false, call_type: 'missed',
}];

describe('Activity Model', () => {
  describe('getAll()', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should call backend with good parameters', () => {
      fetch.mockResponseOnce(JSON.stringify(mockActivities));
      Activity.getAll();
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('https://aircall-job.herokuapp.com/activities');
    });

    it('should return 2 objects', () => {
      fetch.mockResponseOnce(JSON.stringify(mockActivities));
      return Activity.getAll()
        .then(activities => expect(activities.length).toEqual(2));
    });

    it('should return Activities objects', () => {
      fetch.mockResponseOnce(JSON.stringify(mockActivities));
      return Activity.getAll()
        .then(activities => expect(activities[0]).toBeInstanceOf(Activity));
    });
  });

  describe('getById()', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });

    it('should call backend with good parameters', () => {
      fetch.mockResponseOnce(JSON.stringify(mockActivities[0]));
      Activity.getById(7834);
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual('https://aircall-job.herokuapp.com/activities/7834');
    });


    it('should return Activities objects', () => {
      fetch.mockResponseOnce(JSON.stringify(mockActivities[0]));
      return Activity.getById(7834)
        .then(activity => expect(activity.id).toEqual(7834));
    });
  });
});
