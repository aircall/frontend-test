import styled, { css } from "styled-components";
import {
  Call,
  CallMade,
  CallReceived,
  CallMissed,
  CallMissedOutgoing,
} from "@styled-icons/material";

export const ActivityContainer = styled.section`
  display: flex;
  align-items: center;
  border: 0.0625rem solid
    ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.BORDER_COLOR};
  padding: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.INNER_SPACING};
  border-radius: 0.25rem;
`;

export const CallIconContainer = styled.span`
  position: relative;
`;

export const CallIcon = styled(Call)`
  width: 2rem;
  color: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.PHONE_ICON_COLOR};
`;

const callStatus = css`
  position: absolute;
  width: 1rem;
  right: 0.2rem;
  top: 0.25rem;
`

export const MissedOutboundCallIcon = styled(CallMissedOutgoing)`
  ${callStatus}
  color: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.MISSED_COLOR};
`;

export const MissedInboundCallIcon = styled(CallMissed)`
  ${callStatus}
  color: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.MISSED_COLOR};
`;

export const AnsweredOutboundCallIcon = styled(CallMade)`
  ${callStatus}
  color: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.ANSWERED_COLOR};
`;

export const AnsweredInboundCallIcon = styled(CallReceived)`
  ${callStatus}
  color: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.ANSWERED_COLOR};
`;

export const VoicemailOutboundCallIcon = styled(CallMissedOutgoing)`
  ${callStatus}
  color: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.VOICEMAIL_COLOR};
`;

export const VoicemailInboundCallIcon = styled(CallMissed)`
  ${callStatus}
  color: ${({ theme }) =>
    theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.VOICEMAIL_COLOR};
`;

export const CallInfoContainer = styled.section`
  margin: 0 ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.INNER_SPACING};
  flex-grow: 1;
`;

export const PrimaryNumber = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.PRIMARY_NUMBER.FONT_SIZE};
  margin-bottom: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.PRIMARY_NUMBER.MARGIN};
  font-weight: bold;
  `;

export const SecondaryNumber = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.COMPONENTS.ACTIVITY_FEED.ACTIVITY.SECONDARY_NUMBER.COLOR};
`;

export const Time = styled.span``;
