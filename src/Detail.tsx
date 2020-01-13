import React, { useEffect, useContext, useState } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { Item, Loader } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';

import ActivitiesContext, { Activity } from './context/index';
import {
  FULL_DATE_FORMAT,
  CallImage,
  CallDescription,
  CallDuration
} from './helpers';

import 'semantic-ui-css/components/reset.min.css?global';
import 'semantic-ui-css/components/loader.min.css?global';
import 'semantic-ui-css/components/item.min.css?global';
import 'semantic-ui-css/components/image.min.css?global';
import status from './css/status.css';
import styles from './css/detail.css';

const activityToItemMapper = (activity: Activity) => ({
  image: (
    <div className={`ui tiny image ${status.icon}`}>
      <CallImage direction={activity.direction} />
    </div>
  ),
  header: activity.from,
  description: <CallDescription activity={activity} />,
  meta: (
    <div className="meta">
      <FormattedDate value={activity.created_at} {...FULL_DATE_FORMAT} />
    </div>
  ),
  extra: (
    <div className="extra">
      <CallDuration minutes={parseInt(activity.duration, 10) / 60} />
    </div>
  )
});

const LoadDetail = () => {
  const { loadActivity } = useContext(ActivitiesContext);
  const { activityId } = useParams<{ activityId: string }>();
  const [activity, setActivity] = useState<Activity>();

  useEffect(() => {
    loadActivity(parseInt(activityId, 10)).then(setActivity);
  }, [activityId]);

  return !activity ? (
    <Loader active inline="centered" />
  ) : (
    <Item.Group
      items={[activityToItemMapper(activity)]}
      className={status[activity.call_type]}
    />
  );
};

export default () => {
  return (
    <React.Fragment>
      <h2 className={styles.header}>
        <FormattedMessage
          id="call.detail.title"
          description="Call detail title"
          defaultMessage="Call detail"
        />
      </h2>
      <div className={styles.detail}>
        <LoadDetail />
        <Link to="/" className={styles.back}>
          <FormattedMessage
            id="detail.exit.link"
            description="Lint to exit event detail"
            defaultMessage="Back to event feed"
          />
        </Link>
      </div>
    </React.Fragment>
  );
};
