import * as React from "react";
import { render, screen } from "@testing-library/react";
import { default as user } from "@testing-library/user-event";
import { ActivityDetailHeader } from "./ActivityDetailHeader";

const mockGoBack = jest.fn();
const mockOnArchiveActivity = jest.fn();

const props = {
  isArchived: true,
  goBack: mockGoBack,
  onArchiveActivity: mockOnArchiveActivity
};
test("should render without crashing", () => {
  const { container } = render(<ActivityDetailHeader {...props} />);
  expect(container.firstChild).toBeInTheDocument();
});

test("should render 'Reset' instead of 'Archived'", () => {
  const { rerender } = render(<ActivityDetailHeader {...props} />);
  expect(screen.getByText(/reset/i)).toBeInTheDocument();
  rerender(<ActivityDetailHeader {...props} isArchived={false} />);
  expect(screen.getByText(/archived/i)).toBeInTheDocument();
});

test("should call goBack", () => {
  render(<ActivityDetailHeader {...props} />);
  user.click(screen.getByText(/go back/i));
  expect(mockGoBack).toHaveBeenCalled();
});

test("should call onArchiveActivity", () => {
  render(<ActivityDetailHeader {...props} />);
  user.click(screen.getByText(/reset/i));
  expect(mockOnArchiveActivity).toHaveBeenCalled();
});
