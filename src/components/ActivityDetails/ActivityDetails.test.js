import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ActivityProvider, {
  ActivityContext,
} from '../../store/context/ActivityContext';
import ActivityDetails from './ActivityDetails';

jest.mock('./ActivityDetails.css', () => {
  return {};
});

// Enhancing the render method with context provider
const renderWithContextAndRouter = (component) => {
  const history = createMemoryHistory(); // Creating a navigation history
  return {
    ...render(
      <Router history={history}>
        <ActivityProvider value={ActivityContext}>{component}</ActivityProvider>
      </Router>
    ),
  };
};

afterEach(cleanup);

describe('Activity details', () => {
  it('should display the details dom correctly', () => {
    const { getByTestId } = renderWithContextAndRouter(<ActivityDetails />);
    expect(getByTestId('activity-details')).toBeInTheDocument();
  });
});
