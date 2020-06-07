import styled from "styled-components";

export const ActivityContainer = styled.section`
  border: 0.0625rem solid
    ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.BORDER_COLOR};
  border-radius: 0.25rem;
`;
