import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Activity } from './context/index';

import Inbound from './img/inbound.svg';
import Outbound from './img/outbound.svg';

export const FULL_DATE_FORMAT = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric'
};

const line = (content: string) => <div>{content}</div>;

export const CallDescription = ({ activity }: { activity: Activity }) => {
  const { to, via } = activity;

  switch (activity.call_type) {
    case 'answered':
      return (
        <FormattedMessage
          id="call.answered"
          description="Answered call description"
          defaultMessage="called {to} <line>via {via}</line>"
          values={{ to, via, line }}
        />
      );
    case 'missed':
      return (
        <FormattedMessage
          id="call.missed"
          description="Missed call description"
          defaultMessage="tried to call {to} <line>via {via}</line>"
          values={{ to, via, line }}
        />
      );
    case 'voicemail':
      return (
        <FormattedMessage
          id="call.voicemail"
          description="Voicemail message description"
          defaultMessage="left a voicemail <line>via {via}</line>"
          values={{ via, line }}
        />
      );
  }
};

export const CallImage = ({ direction }: { direction: string }) => {
  return direction === 'outbound' ? <Outbound /> : <Inbound />;
};

export const CallDuration = ({ minutes }: { minutes: number }) => {
  return (
    <FormattedMessage
      id="call.duration"
      description="Call duration in minutes"
      defaultMessage="{ minutes, plural, one {one minute} other {# minutes} }"
      values={{ minutes }}
    />
  );
};
