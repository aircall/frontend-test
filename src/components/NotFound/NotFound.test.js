import React from 'react';
import { Router } from 'react-router-dom';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import NotFound from './NotFound';

// Ignoring css file
jest.mock('./NotFound.css', () => {
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

describe('Not found', () => {
  it('should display a not found message', () => {
    const { getByText } = renderWithRouter(<NotFound />);
    expect(getByText('Oups, nothing here...')).toBeInTheDocument();
  });

  it('should display a link to go back to the activity feed', () => {
    const { getByText } = renderWithRouter(<NotFound />);
    const link = getByText('Go back to activity feed');
    expect(link).toBeInTheDocument();
  });

  it('should navigate back to the activity feed', async () => {
    const { getByText, getByTestId } = renderWithRouter(<NotFound />);
    const link = getByText('Go back to activity feed');

    fireEvent.click(link);

    const activityFeed = await waitForElement(() =>
      getByTestId('activity-feed')
    );

    expect(activityFeed).toBeInTheDocument();
  });
});
