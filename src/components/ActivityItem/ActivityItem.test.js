import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActivityItem from './ActivityItem';

// Ignoring css file
jest.mock('./ActivityItem.css', () => {
  return {};
});

afterEach(cleanup);

describe('Activity item', () => {
  it('should display an activity item', () => {
    const { container } = render(<ActivityItem />);
    expect(container.querySelector('.activity-item')).toBeInTheDocument();
  });
});
