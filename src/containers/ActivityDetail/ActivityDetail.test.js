import React from 'react';
import { shallow } from 'enzyme';

import { ActivityDetail } from './ActivityDetail';
import { ActivityDetailItem } from '../../components/ActivityDetailItem/ActivityDetailItem';

const activity = {
  callType: "missed",
  createdAt: "2018-04-19T09:38:41.000Z",
  direction: "outbound",
  duration: "120",
  from: "Pierre-Baptiste Béchu",
  id: 7834,
  isArchived: false,
  to: "06 46 62 12 33",
  via: "NYC Office"
};

describe('ActivityDetail', () => {
  const getActivity = () => Promise.resolve();
  const mockArchiveCallback = jest.fn(() => Promise.resolve());
  const item = shallow(<ActivityDetail activity={activity} getActivity={getActivity} setArchived={mockArchiveCallback} />);

  afterEach(() => {
    mockArchiveCallback.mockClear();
  });

  it('should render the item with no error', () => {
    const state = item.state();
    expect(state.fetching).toBe(false);
    expect(state.error).toBe(false);
    expect(item).toContainMatchingElement(ActivityDetailItem);
    const detailItem = item.find(ActivityDetailItem).dive();
    expect(detailItem).toContainMatchingElements(5, '.infoContainer');
  });

  it('should try to archive the activity on button click', () => {
    const detailItem = item.find(ActivityDetailItem).dive();
    detailItem.find('button').simulate('click');
    expect(mockArchiveCallback.mock.calls.length).toBe(1);
    expect(mockArchiveCallback.mock.calls[0][0]).toBe(true);
  });

  describe('with activity already archived', () => {
    let oldProps;
    beforeEach(() => {
      oldProps = item.props();
      item.setProps({
        activity: ({ ...activity, isArchived: true }),
        getActivity,
        setArchived: mockArchiveCallback
      });
    });
    afterEach(() => {
      item.setProps(oldProps);
    });

    it('should try to unarchive the activity on button click', () => {
      const detailItem = item.find(ActivityDetailItem).dive();
      detailItem.find('button').simulate('click');
      expect(mockArchiveCallback.mock.calls.length).toBe(1);
      expect(mockArchiveCallback.mock.calls[0][0]).toBe(false);
    });
  });
});
