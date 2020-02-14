import * as React from "react";
import { TFormatedActivity } from "../../../types";
import { default as phoneImg } from "../../../assets/phone.svg";
import { default as downArrow } from "../../../assets/downArrow.svg";
import { default as upArrow } from "../../../assets/upArrow.svg";
import {
  StyledWrapper,
  StyledRow,
  StyledPhone,
  StyledAbsolute,
  StyledNumberBlock,
  StyledNumberDesc,
  StyledTimeP,
  StyledTimeSuffix
} from "./Activity.styled";

interface IProps {
  activity: TFormatedActivity;
  goToDetail: () => void;
}
export const Activity: React.FC<IProps> = ({ activity, goToDetail }) => {
  return (
    <StyledWrapper onClick={goToDetail} data-testid="activity-item">
      <StyledRow>
        <StyledPhone>
          <img src={phoneImg} width="20px" />
          <StyledAbsolute right={0} top={0}>
            <img
              src={activity.direction === "inbound" ? downArrow : upArrow}
              width="10px"
            />
          </StyledAbsolute>
        </StyledPhone>
        <div>
          <StyledRow>
            <StyledNumberBlock>{activity.from}</StyledNumberBlock>
            {/* <StyledCallsNum>2</StyledCallsNum> */}
          </StyledRow>
          <StyledNumberDesc>tried to call on {activity.to}</StyledNumberDesc>
        </div>
      </StyledRow>
      <StyledRow>
        <StyledRow>
          <StyledTimeP>{activity.call_hour}</StyledTimeP>
          <StyledTimeSuffix>{activity.hour_side}</StyledTimeSuffix>
        </StyledRow>
      </StyledRow>
    </StyledWrapper>
  );
};
