import styled from "styled-components";
import { Link } from "react-router-dom";

export const DayList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const DayItem = styled.li`
  margin: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.DAY.MARGIN} 0;
`;

export const Day = styled.h3`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.DAY.COLOR};
  margin: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.DAY.LABEL_MARGIN} 0;
  &::before,
  &::after {
    display: block;
    content: "";
    flex-grow: 1;
    border-top: 0.0625rem solid
      ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.DAY.BORDER_COLOR};
  }
  &::before {
    margin-right: ${({ theme }) =>
      theme.COMPONENTS.ACTIVITY_FEED.DAY.BORDER_MARGIN};
  }
  &::after {
    margin-left: ${({ theme }) =>
      theme.COMPONENTS.ACTIVITY_FEED.DAY.BORDER_MARGIN};
  }
`;

export const ActivityList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ActivityItem = styled.li`
  margin: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ITEM.MARGIN} 0;
`;

export const ActivityLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: inherit;
`

export const Error = styled.p`
  color: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ERROR.COLOR};
`;
