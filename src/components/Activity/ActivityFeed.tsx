import React from "react";
import { createResource, createCache } from "simple-cache-provider";
import { indexActivities, resetActivities } from "../../api/activity";
import styled from "styled-components";
import ActivityDetail from "./ActivityDetail";
import { Activity } from "../../models/Activity";
import { format } from "date-fns";
import FlipMove from "react-flip-move";

const DateListWrapper = styled(FlipMove)`
  margin: 10px;
`;

const ActivityDetailWrapper = styled.div`
  margin-bottom: 10px;
`;

const DateWrapper = styled.div`
  text-align: center;
  color: lightgrey;
  font-size: 10px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const ResetButton = styled.button`
  width: 100%;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  background: palevioletred;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

const activityResources = createResource(indexActivities);
const cache = createCache();

export default () => {
  // React will retry to display activities until they are fethed.
  // If they are not ready yet, activityResources will throw a Promise,
  // which will be caught in React.Suspense
  const activitiesResponse = activityResources.read(cache);

  if (activitiesResponse.error) {
    alert(activitiesResponse.message);
    return null;
  }

  const [activities, setActivities] = React.useState(
    activitiesResponse.payload
  );

  const dateIndexedActivities: { [date: string]: Activity[] } = {};

  activities.reduce((acc, activity) => {
    if (!activity.is_archived) {
      const date = format(activity.created_at, "YYYY/MM/DD");
      (acc[date] = acc[date] || []).push(activity);
    }
    return acc;
  }, dateIndexedActivities);

  return (
    <DateListWrapper maintainContainerHeight>
      {Object.keys(dateIndexedActivities).map(date => (
        <div key={date}>
          <DateWrapper>{format(date, "MMMM, DD YYYY")}</DateWrapper>
          <FlipMove maintainContainerHeight>
            {dateIndexedActivities[date]
              .sort(
                (a, b) =>
                  new Date(b.created_at).valueOf() -
                  new Date(a.created_at).valueOf()
              )
              .map(activity => (
                <ActivityDetailWrapper key={activity.id}>
                  <ActivityDetail
                    activity={activity}
                    refreshActivity={activity =>
                      setActivities(
                        activities.map(a =>
                          a.id === activity.id ? activity : a
                        )
                      )
                    }
                  />
                </ActivityDetailWrapper>
              ))}
          </FlipMove>
        </div>
      ))}
      {activities.findIndex(a => !a.is_archived) === -1 && (
        <ResetButton
          key="reset"
          type="button"
          onClick={async () => {
            const resetResult = await resetActivities();
            if (resetResult.error) {
              alert(resetResult.message);
              return;
            }
            const indexResult = await indexActivities();
            if (indexResult.error) {
              alert(indexResult.message);
              return;
            }

            setActivities(indexResult.payload);
          }}
        >
          Reset Activities
        </ResetButton>
      )}
    </DateListWrapper>
  );
};
