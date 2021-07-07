import * as React from "react";
import { StyledWrapper, StyledDateDay } from "./BlockActivities.styled";
interface IProps {
  dayDate: string;
  children: React.ReactNode;
}

export const BlockActivities: React.FC<IProps> = ({ dayDate, children }) => {
  return (
    <StyledWrapper>
      <StyledDateDay>{dayDate}</StyledDateDay>
      {children}
    </StyledWrapper>
  );
};
