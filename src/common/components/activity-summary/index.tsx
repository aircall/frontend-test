import React, { useMemo } from "react";

import {
  ActivitySummaryContainer,
  CallIconContainer,
  CallIcon,
  AnsweredInboundCallIcon,
  MissedInboundCallIcon,
  VoicemailInboundCallIcon,
  AnsweredOutboundCallIcon,
  MissedOutboundCallIcon,
  VoicemailOutboundCallIcon,
  CallInfoContainer,
  PrimaryNumber,
  SecondaryNumber,
  Time,
} from "./styled-components";
import {
  CallType,
  CallDirection,
  Activity as TActivity,
} from "../../service/activity";

export type Props = {
  activity: TActivity;
};

const CALL_ICONS = {
  [`${CallDirection.INBOUND}_${CallType.ANSWERED}`]: AnsweredInboundCallIcon,
  [`${CallDirection.INBOUND}_${CallType.MISSED}`]: MissedInboundCallIcon,
  [`${CallDirection.INBOUND}_${CallType.VOICEMAIL}`]: VoicemailInboundCallIcon,
  [`${CallDirection.OUTBOUND}_${CallType.ANSWERED}`]: AnsweredOutboundCallIcon,
  [`${CallDirection.OUTBOUND}_${CallType.MISSED}`]: MissedOutboundCallIcon,
  [`${CallDirection.OUTBOUND}_${CallType.VOICEMAIL}`]: VoicemailOutboundCallIcon,
};

function getPrimaryNumber({ direction, from, to }: TActivity) {
  return direction === CallDirection.OUTBOUND ? to : from;
}

function getSecondaryNumber({ direction, from, to }: TActivity) {
  return direction === CallDirection.OUTBOUND ? from : to;
}

export function ActivitySummary({ activity }: Props) {
  const { direction, call_type, created_at } = activity;
  const CallStatusIcon = useMemo(
    () => CALL_ICONS[`${direction}_${call_type}`],
    [direction, call_type]
  );
  return (
    <ActivitySummaryContainer>
      <CallIconContainer>
        <CallIcon />
        <CallStatusIcon />
      </CallIconContainer>
      <CallInfoContainer>
        <PrimaryNumber>{getPrimaryNumber(activity)}</PrimaryNumber>
        <SecondaryNumber>{getSecondaryNumber(activity)}</SecondaryNumber>
      </CallInfoContainer>
      <Time>
        {new Date(created_at).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Time>
    </ActivitySummaryContainer>
  );
}
