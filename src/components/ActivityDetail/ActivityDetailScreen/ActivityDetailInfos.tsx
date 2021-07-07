import * as React from "react";
import { IActivity } from "../../../types";
import {
  StyledItem,
  StyledLabel,
  StyledInfo
} from "./ActivityDetailScreen.styled";

interface IProps {
  activity: IActivity | null;
}
export const ActivityDetailInfos: React.FC<IProps> = ({ activity }) => {
  return (
    <>
      <StyledItem>
        <StyledLabel>From: </StyledLabel>
        <StyledInfo>{activity?.from}</StyledInfo>
      </StyledItem>
      <StyledItem>
        <StyledLabel>To: </StyledLabel>
        <StyledInfo>{activity?.to}</StyledInfo>
      </StyledItem>
      <StyledItem>
        <StyledLabel>Call Type: </StyledLabel>
        <StyledInfo>{activity?.call_type}</StyledInfo>
      </StyledItem>
      <StyledItem>
        <StyledLabel>Direction: </StyledLabel>
        <StyledInfo>{activity?.direction}</StyledInfo>
      </StyledItem>
      <StyledItem>
        <StyledLabel>Via: </StyledLabel>
        <StyledInfo>{activity?.via}</StyledInfo>
      </StyledItem>
      <StyledItem>
        <StyledLabel>Duration: </StyledLabel>
        <StyledInfo>{activity?.duration}</StyledInfo>
      </StyledItem>
      <StyledItem>
        <StyledLabel>Time: </StyledLabel>
        <StyledInfo>{activity?.created_at}</StyledInfo>
      </StyledItem>
    </>
  );
};
