import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import ActivityList from './ActivityList';
import Activity from '../models/Activity';
import ActivitiesByDate from './components/ActivitiesByDate';

const mockActivities = [
  new Activity(7834, '2018-04-19T09:38:41.000Z', 'outbound', 'Pierre-Baptiste Béchu', '06 46 62 12 33', 'NYC Office', '120', false, 'missed'),
  new Activity(7833, '2018-04-18T09:38:41.000Z', 'outbound', 'Jonathan Anguelov', '06 45 13 53 91', 'NYC Office', '60', false, 'answered'),
];

let wrapper;

describe('ActivityList', () => {
  it('renders without crashing', () => {
    shallow(<ActivityList />);
  });

  describe('After loading', () => {
    beforeEach(() => {
      jest.spyOn(Activity, 'getAll');
      Activity.getAll.mockReturnValue(Promise.resolve(mockActivities));
      wrapper = mount(
        <MemoryRouter>
          <ActivityList />
        </MemoryRouter>,
      );
    });
    afterEach(() => {
      Activity.getAll.mockClear();
    });

    it('should renders 2 ActivitiesByDate element', async () => {
      await wrapper.update();
      expect(wrapper.find(ActivitiesByDate).length).toBe(2);
    });
  });
});
