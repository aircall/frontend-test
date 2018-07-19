import * as React from 'react';
import { shallow } from 'enzyme';
import { MdCallReceived, MdCallMade } from 'react-icons/lib/md';

import ActivityDirection from './ActivityDirection';

describe('ActivityDirection', () => {
  it('renders without crashing', () => {
    shallow(<ActivityDirection direction="" callType="" />);
  });

  it('should have missed class if callType prop is missed', () => {
    const wrapper = shallow(<ActivityDirection callType="missed" />);
    expect(wrapper.find('.missed').length).toEqual(1);
  });

  it('should have answered class if callType prop is answered', () => {
    const wrapper = shallow(<ActivityDirection callType="answered" />);
    expect(wrapper.find('.answered').length).toEqual(1);
  });

  it('should contain call received icon if direction prop is inbound', () => {
    const wrapper = shallow(<ActivityDirection direction="inbound" />);
    expect(wrapper.contains(<MdCallReceived />)).toBe(true);
  });

  it('should contain call made icon if direction prop is outbound', () => {
    const wrapper = shallow(<ActivityDirection direction="outbound" />);
    expect(wrapper.contains(<MdCallMade />)).toBe(true);
  });
});
