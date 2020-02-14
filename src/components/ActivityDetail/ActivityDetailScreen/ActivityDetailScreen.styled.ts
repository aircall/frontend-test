import { default as styled } from "../../../StyledComponents";

export const StyledWrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

export const StyledButton = styled.button<{ isArchived?: boolean }>`
  border-radius: 5px;
  background-color: ${({ theme, isArchived }) =>
    isArchived ? theme.lightGrey : theme.darkAirCall};
  color: ${({ theme, isArchived }) => (isArchived ? theme.dark : theme.white)};
  font-size: 12px;
  padding: 10px;
  outline: none;
`;

export const StyledLabel = styled.span`
  font-weight: 900;
`;

export const StyledItem = styled.h1`
  font-size: 18px;
  color: ${props => props.theme.darkAirCall};
  padding: 5px;
`;

export const StyledInfo = styled.span`
  margin-right: 10px;
  :hover {
    font-weight: 800;
    text-decoration: underline;
    color: ${props => props.theme.airCallColor};
    cursor: pointer;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
