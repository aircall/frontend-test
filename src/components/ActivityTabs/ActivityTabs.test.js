import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActivityTabs from './ActivityTabs';

// Ignoring css file
jest.mock('./ActivityTabs.css', () => {
  return {};
});

// Enhancing render method to use Router
const renderWithRouter = (component) => {
  const history = createMemoryHistory(); // Creating a navigation history
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

afterEach(cleanup);

describe('Activity nav', () => {
  it('should display the nav links', () => {
    const { getByText } = renderWithRouter(<ActivityTabs />);
    expect(getByText('Activity Feed')).toBeInTheDocument();
    expect(getByText('Activity Archives')).toBeInTheDocument();
  });

  it('should init with the activity feed tab active', () => {
    const { getByText } = renderWithRouter(<ActivityTabs />);
    expect(getByText('Activity Feed')).toHaveClass('tabs__link-active');
  });

  // it('should set a link to active on click', () => {
  //   const { getByText } = render(<ActivityTabs />);
  //   fireEvent.click(getByText('Activity Archives'));
  //   expect(getByText('Activity Archives')).toHaveClass('nav__link-active');
  // });
});
