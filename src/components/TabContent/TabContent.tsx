import * as React from "react";

interface IProps {
  isVisible: boolean;
  children: React.ReactNode;
}
export const TabContent: React.FC<IProps> = ({ isVisible, children }) => {
  if (isVisible) {
    return <>{children}</>;
  }
  return null;
};
