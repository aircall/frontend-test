import { default as styled } from "../../StyledComponents";

export const StyledTitle = styled.h1`
  color: ${props => props.theme.dark};
  padding: 10px;
  font-size: 16px;
  font-weight: 400;
`;

export const StyledTab = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  width: calc(50% - 20px);
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 6px;
  background-color: ${({ theme, active }) =>
    active ? theme.lightGrey : theme.white};
  min-height: 60px;
  margin: 8px 0;
  padding: 5px;
  :hover {
    background-color: ${props => props.theme.lightGrey};
    cursor: ${({ active }) => (active ? "unset" : "pointer")};
  }
`;

export const WrapperHeaderActivities = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
