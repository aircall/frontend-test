import * as React from "react";

import { Header, TabContent } from "./components";
import { TFormatedActivity, IRootState, IActivity } from "./types";
import { StyledContainer, StyledContainerView } from "./App.styled";
import { useSelector, useDispatch } from "react-redux";
import { fetchActivitiesAction } from "./Redux/Actions";
import { ActivityList } from "./components/ActivityFeed/ActivityList/ActivityList";

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
          <ActivityList activities={activities as any} goToDetail={() => {}} />
        </TabContent>
      </StyledContainerView>
    </StyledContainer>
  );
};
