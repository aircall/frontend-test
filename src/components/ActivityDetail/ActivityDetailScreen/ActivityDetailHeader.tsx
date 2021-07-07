import * as React from "react";
import {
  StyledWrapperHeader,
  StyledButton
} from "./ActivityDetailScreen.styled";

interface IProps {
  isArchived?: boolean;
  goBack: () => void;
  onArchiveActivity: () => void;
}

export const ActivityDetailHeader: React.FC<IProps> = ({
  isArchived,
  goBack,
  onArchiveActivity
}) => {
  return (
    <StyledWrapperHeader>
      <StyledButton onClick={goBack}>Go Back</StyledButton>
      <StyledButton isArchived={isArchived} onClick={onArchiveActivity}>
        {isArchived ? "Reset" : "Archived"}
      </StyledButton>
    </StyledWrapperHeader>
  );
};
