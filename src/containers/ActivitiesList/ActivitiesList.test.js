import React from 'react';
import { shallow } from 'enzyme';

import { ActivitiesList } from './ActivitiesList';
import { ActivityListItem } from '../../components/ActivityListItem/ActivityListItem';

const activities = [
  {
    callType: "missed",
    createdAt: "2018-04-19T09:38:41.000Z",
    direction: "outbound",
    duration: "120",
    from: "Pierre-Baptiste Béchu",
    id: 7834,
    isArchived: false,
    to: "06 46 62 12 33",
    via: "NYC Office"
  },
  {
    callType: "missed",
    createdAt: "2018-04-18T16:59:48.000Z",
    direction: "outbound",
    duration: "60",
    from: "Jonathan Anguelov",
    id: 7833,
    isArchived: false,
    to: "06 45 13 53 91",
    via: "NYC Office"
  },
  {
    callType: "answered",
    createdAt: "2018-04-18T16:53:22.000Z",
    direction: "inbound",
    duration: "180",
    from: "06 19 18 23 92",
    id: 7832,
    isArchived: false,
    to: "Jonathan Anguelov",
    via: "Support FR"
  }
];

describe('ActivitiesList', () => {
  const fetchActivities = () => Promise.resolve();
  const mockArchiveCallback = jest.fn(() => Promise.resolve());
  const list = shallow(<ActivitiesList activities={activities} fetchActivities={fetchActivities} setArchived={mockArchiveCallback} />);

  afterEach(() => {
    mockArchiveCallback.mockClear();
  });

  it('should render every item with no error', () => {
    const state = list.state();
    expect(state.fetching).toBe(false);
    expect(state.error).toBe(false);
    for (const activity of activities) {
      expect(list).toContainReact(<ActivityListItem key={`activity-item-${activity.id}`} activity={activity} />);
    }
  });

  it('should try to archive all activities on button click', () => {
    list.find('button').simulate('click');
    expect(mockArchiveCallback.mock.calls.length).toBe(activities.length);
    for (let i = 0; i < activities.length; i++) {
      expect(mockArchiveCallback.mock.calls[i][0]).toBe(activities[i].id);
      expect(mockArchiveCallback.mock.calls[i][1]).toBe(true);
    }
  });

  describe('with all activities already archived', () => {
    let oldProps;
    beforeEach(() => {
      oldProps = list.props();
      list.setProps({
        activities: activities.map(activity => ({ ...activity, isArchived: true })),
        fetchActivities,
        setArchived: mockArchiveCallback
      });
    });
    afterEach(() => {
      list.setProps(oldProps);
    });

    it('should try to unarchive all activities on button click', () => {
      list.find('button').simulate('click');
      expect(mockArchiveCallback.mock.calls.length).toBe(activities.length);
      for (let i = 0; i < activities.length; i++) {
        expect(mockArchiveCallback.mock.calls[i][0]).toBe(activities[i].id);
        expect(mockArchiveCallback.mock.calls[i][1]).toBe(false);
      }
    });
  });
});
