import * as React from "react";
import { StyledWrapper } from "./ActivityDetailScreen.styled";

interface IProps {
  children: React.ReactNode;
}
export const ActivityDetailScreen: React.FC<IProps> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
