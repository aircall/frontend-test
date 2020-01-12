import React from 'react';
import { useIntl, FormattedMessage, IntlFormatters } from 'react-intl';
import { Feed, Loader } from 'semantic-ui-react';
import ActivitiesContext, { State, Activity } from './context/index';

import Inbound from './img/inbound.svg';
import Outbound from './img/outbound.svg';

import 'semantic-ui-css/components/reset.min.css?global';
import 'semantic-ui-css/components/loader.min.css?global';
import 'semantic-ui-css/components/feed.min.css?global';
import styles from './css/feed.css';

const FULL_DATE_FORMAT = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: 'numeric',
  minute: 'numeric'
};

const line = (content: string) => <div>{content}</div>;

const describeCall = (
  formatMessage: IntlFormatters['formatMessage'],
  activity: Activity
) => {
  const { to, via } = activity;

  switch (activity.call_type) {
    case 'answered':
      return formatMessage(
        {
          id: 'call.answered',
          description: 'Answered call',
          defaultMessage: 'called {to} <line>via {via}</line>'
        },
        { to, via, line }
      );
    case 'missed':
      return formatMessage(
        {
          id: 'call.answered',
          description: 'Missed call',
          defaultMessage: 'tried to call {to} <line>via {via}</line>'
        },
        { to, via, line }
      );
    case 'voicemail':
      return formatMessage(
        {
          id: 'call.voicemail',
          description: 'Voicemail message',
          defaultMessage: 'left a voicemail <line>via {via}</line>'
        },
        { via, line }
      );
  }
};

const activityToFeedEventMapper = (
  formatMessage: IntlFormatters['formatMessage'],
  formatDate: IntlFormatters['formatDate']
) => (activity: Activity) => ({
  key: activity.id,
  className: activity.call_type,
  date: formatDate(activity.created_at, FULL_DATE_FORMAT),
  image: (
    <div className="label">
      {activity.direction === 'outbound' ? <Outbound /> : <Inbound />}
    </div>
  ),
  summary: activity.from,
  extraText: describeCall(formatMessage, activity),
  meta: (
    <span className="meta">
      <FormattedMessage
        id="call.duration"
        description="Call duration in minutes"
        defaultMessage="{ minutes, plural, one {one minute} other {# minutes} }"
        values={{ minutes: parseInt(activity.duration, 10) / 60 }}
      />
    </span>
  )
});

export default () => {
  const { formatMessage, formatDate } = useIntl();

  return (
    <ActivitiesContext.Consumer>
      {({ activities, reload }: State) =>
        !activities.length ? (
          <Loader active />
        ) : (
          <React.Fragment>
            <h2 className={styles.header} onClick={reload}>
              <FormattedMessage
                id="call.feed.title"
                description="Call feed title"
                defaultMessage="Call Activity"
              />
            </h2>
            <Feed
              className={styles.list}
              events={activities
                .filter(({ is_archived }) => !is_archived)
                .map(activityToFeedEventMapper(formatMessage, formatDate))}
            />
          </React.Fragment>
        )
      }
    </ActivitiesContext.Consumer>
  );
};
