import styled from "styled-components";
import { Archive } from "@styled-icons/material";

export const InfoList = styled.ul`
  list-style-type: none;
  margin: ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.MARGIN} 0;
  border: 0.0625rem solid
    ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.BORDER_COLOR};
`;

export const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.ITEM_SPACING};
  &:nth-child(even) {
    background-color: ${({ theme }) =>
      theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.ZEBRA_COLOR_EVEN};
  }
  &:nth-child(odd) {
    background-color: ${({ theme }) =>
      theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.ZEBRA_COLOR_ODD};
  }
`;

export const InfoLabel = styled.label`
  font-weight: bold;
`;

export const InfoValue = styled.label`
  text-transform: capitalize;
`;

export const Error = styled.p`
  color: ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.ERROR.COLOR};
`;

export const ArchiveButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font-weight: bold;
  padding: ${({ theme }) =>
      theme.COMPONENTS.ACTIVITY_DETAIL.ARCHIVE_BUTTON.V_PADDING}
    ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.ARCHIVE_BUTTON.H_PADDING};
  margin: ${({ theme }) =>
      theme.COMPONENTS.ACTIVITY_DETAIL.ARCHIVE_BUTTON.MARGIN} auto;
  color: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_DETAIL.ARCHIVE_BUTTON.COLOR};
  font-size: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_DETAIL.ARCHIVE_BUTTON.FONT_SIZE};
  background-color: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_DETAIL.ARCHIVE_BUTTON.BACKGROUND_COLOR};
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const ArchiveIcon = styled(Archive)`
  width: 1.25rem;
  margin-right: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_DETAIL.ARCHIVE_BUTTON.V_PADDING};
`;
