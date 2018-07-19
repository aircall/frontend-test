import * as React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import Header from '../shared-components/header/Header';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('should be selectable by class "container"', () => {
    expect(shallow(<App />).is('.container')).toBe(true);
  });
  it('should contains Header', () => {
    expect(mount(<App />).contains(<Header />));
  });
});
