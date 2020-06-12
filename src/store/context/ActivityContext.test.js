import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActivityProvider, { ActivityContext } from './ActivityContext';
import ActivityFeed from '../../components/ActivityFeed/ActivityFeed';

// Ignoring css file
jest.mock('../../components/ActivityItem/ActivityItem.css', () => {
  return {};
});

// Enhancing the render method with context provider
const renderWithContext = (component) => {
  return {
    ...render(
      <ActivityProvider value={ActivityContext}>{component}</ActivityProvider>
    ),
  };
};

afterEach(cleanup);

describe('Activity context', () => {
  it('should display the list of activities on page load', () => {
    const { getByTestId } = renderWithContext(<ActivityFeed />);
    expect(getByTestId('activity-list')).toBeInTheDocument();
  });
});
