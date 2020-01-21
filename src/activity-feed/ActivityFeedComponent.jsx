import React, { useEffect } from "react";
import ActivityItem from "./ActivityItemComponent.jsx";

const ActivityFeedComponent = props => {
  const { activities, loading, fetchActivities } = props;

  useEffect(() => {
    fetchActivities();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="page activity-feed">
      <p className="page-title">Activity Feed</p>
      <div>
        {activities &&
          activities.map(activity => {
            return <ActivityItem activity={activity} key={activity.id} />;
          })}
      </div>
    </div>
  );
};

export default ActivityFeedComponent;
