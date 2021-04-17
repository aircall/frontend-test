import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActivityProvider, {
  ActivityContext,
} from '../../store/context/ActivityContext';
import ActivityFeed from './ActivityFeed';

jest.mock('../ActivityItem/ActivityItem.css', () => {
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

describe('Activity feed', () => {
  it('should display the list of activities on page load', () => {
    const { getByTestId } = renderWithContext(<ActivityFeed />);
    expect(getByTestId('activity-list')).toBeInTheDocument();
  });
});
