import * as React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
