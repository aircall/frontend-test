import { default as styled } from "../../../StyledComponents";

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => props.theme.primaryColor};
  border-radius: 6px;
  background-color: white;
  min-height: 60px;
  margin: 8px 0;
  :hover {
    background-color: ${props => props.theme.lightGrey};
    cursor: pointer;
  }
`;

export const StyledNumberBlock = styled.p`
  color: black;
  font-weight: 400;
  font-size: 14px;
  margin-inline-start: 10px;
`;

export const StyledNumberDesc = styled.p`
  color: gray;
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  margin-inline-start: 10px;
`;

export const StyledTimeP = styled.p`
  color: black;
  font-weight: 400;
  font-size: 12px;
  margin: 0 10px;
`;

export const StyledTimeSuffix = styled.span`
  color: gray;
  font-weight: 400;
  font-size: 9px;
  padding: 2px 4px;
  border: solid 1px lightgray;
  border-radius: 2px;
`;

export const StyledCallsNum = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: orangered;
  color: white;
  font-weight: 400;
  font-size: 10px;
  padding: 4px;
  text-align: center;
  margin: 0 5px;
`;

export const StyledPhone = styled.div`
  position: relative;
  margin: 0 15px;
`;

export const StyledAbsolute = styled.div<{
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}>`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
`;

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
`;
