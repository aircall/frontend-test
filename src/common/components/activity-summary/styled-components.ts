import styled, { css } from "styled-components";
import {
  Call,
  CallMade,
  CallReceived,
  CallMissed,
  CallMissedOutgoing,
} from "@styled-icons/material";

export const ActivitySummaryContainer = styled.section`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.INNER_SPACING};
`;

export const CallIconContainer = styled.span`
  position: relative;
`;

export const CallIcon = styled(Call)`
  width: 2rem;
  color: ${({ theme }) =>
    theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.PHONE_ICON_COLOR};
`;

const callStatus = css`
  position: absolute;
  width: 1rem;
  right: 0.2rem;
  top: 0.25rem;
`

export const MissedOutboundCallIcon = styled(CallMissedOutgoing)`
  ${callStatus}
  color: ${({ theme }) => theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.MISSED_COLOR};
`;

export const MissedInboundCallIcon = styled(CallMissed)`
  ${callStatus}
  color: ${({ theme }) => theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.MISSED_COLOR};
`;

export const AnsweredOutboundCallIcon = styled(CallMade)`
  ${callStatus}
  color: ${({ theme }) =>
    theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.ANSWERED_COLOR};
`;

export const AnsweredInboundCallIcon = styled(CallReceived)`
  ${callStatus}
  color: ${({ theme }) =>
    theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.ANSWERED_COLOR};
`;

export const VoicemailOutboundCallIcon = styled(CallMissedOutgoing)`
  ${callStatus}
  color: ${({ theme }) =>
    theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.VOICEMAIL_COLOR};
`;

export const VoicemailInboundCallIcon = styled(CallMissed)`
  ${callStatus}
  color: ${({ theme }) =>
    theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.VOICEMAIL_COLOR};
`;

export const CallInfoContainer = styled.section`
  margin: 0 ${({ theme }) => theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.INNER_SPACING};
  flex-grow: 1;
`;

export const PrimaryNumber = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.PRIMARY_NUMBER.FONT_SIZE};
  margin-bottom: ${({ theme }) => theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.PRIMARY_NUMBER.MARGIN};
  font-weight: bold;
  `;

export const SecondaryNumber = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.COMPONENTS.COMMON.ACTIVITY_SUMMARY.SECONDARY_NUMBER.COLOR};
`;

export const Time = styled.span``;
