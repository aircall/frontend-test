import * as React from "react";

import { Header, TabContent } from "./components";
import { Activity } from "./components/ActivityFeed";
import { TFormatedActivity, IRootState, IActivity } from "./types";
import { StyledContainer, StyledContainerView } from "./App.styled";
import { useSelector, useDispatch } from "react-redux";
import { fetchActivitiesAction } from "./Redux/Actions";

const data = {
  id: 7834,
  created_at: "2018-04-19T09:38:41.000Z",
  direction: "outbound",
  from: "Pierre-Baptiste Béchu",
  to: "06 46 62 12 33",
  via: "NYC Office",
  duration: "120",
  is_archived: false,
  call_type: "missed",
  call_hour: "09:38",
  hour_side: "AM"
} as TFormatedActivity;

export const App = () => {
  const isLoading = useSelector((state: IRootState) => state.entity.isLoading);
  const error = useSelector((state: IRootState) => state.entity.error);
  const activities = useSelector(
    (state: IRootState) => state.entity.activities
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchActivitiesAction());
  }, []);
  return (
    <StyledContainer>
      <Header />
      <StyledContainerView>
        <TabContent isVisible={isLoading}>
          <h1>Loading...</h1>
        </TabContent>
        <TabContent isVisible={error !== null}>
          <h1>Error occur</h1>
        </TabContent>
        <TabContent isVisible={activities.length > 0}>
          {activities.map((activity: IActivity) => (
            <Activity
              key={activity.id}
              goToDetail={() => {}}
              activity={activity as any}
            />
          ))}
        </TabContent>
      </StyledContainerView>
    </StyledContainer>
  );
};
