import React from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Feed, Loader } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import ActivitiesContext, { State, Activity } from './context/index';
import {
  FULL_DATE_FORMAT,
  CallImage,
  CallDescription,
  CallDuration
} from './helpers';

import 'semantic-ui-css/components/reset.min.css?global';
import 'semantic-ui-css/components/loader.min.css?global';
import 'semantic-ui-css/components/feed.min.css?global';
import status from './css/status.css';
import styles from './css/feed.css';

const activityToFeedEventMapper = (activity: Activity) => ({
  key: activity.id,
  className: status[activity.call_type],
  date: (
    <div className="date">
      <FormattedDate value={activity.created_at} {...FULL_DATE_FORMAT} />
    </div>
  ),
  image: (
    <div className={`label ${status.icon}`}>
      <Link to={`/activity/${activity.id}`}>
        <CallImage direction={activity.direction} />
      </Link>
    </div>
  ),
  summary: activity.from,
  extraText: <CallDescription activity={activity} />,
  meta: (
    <div className="meta">
      <CallDuration minutes={parseInt(activity.duration, 10) / 60} />
    </div>
  )
});

export default () => (
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
              defaultMessage="Call activity"
            />
          </h2>
          <Feed
            className={styles.list}
            events={activities
              .filter(({ is_archived }) => !is_archived)
              .map(activityToFeedEventMapper)}
          />
        </React.Fragment>
      )
    }
  </ActivitiesContext.Consumer>
);
