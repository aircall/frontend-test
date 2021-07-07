import { default as styled } from "./StyledComponents";

export const StyledText = styled.div`
  font-size: 40px;
  color: red;
`;

export const StyledContainer = styled.div`
  width: 376px;
  height: 666px;
  z-index: 100;
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
`;

export const StyledContainerView = styled.div`
  padding: 20px 20px 0 20px;
  background-color: ${props => props.theme.lightGrey};
  height: 100%;
`;
