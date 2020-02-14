import * as React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../types";
import {
  sortedActivitiesSelector,
  sortedArchivedActivitiesSelector
} from "../../Redux/Selectors";
import {
  WrapperHeaderActivities,
  StyledTitle,
  StyledTab
} from "./ActivityFeed.styled";
// import { default as archiveIcon } from "../../assets/archiveIcon.svg";
import { TabContent } from "../TabContent";
import { BlockActivities } from "./BlockActivities";
import { ActivityList } from "./ActivityList/ActivityList";

export const ActivityFeed: React.FC = () => {
  const sortedActivities = useSelector((state: IRootState) =>
    sortedActivitiesSelector(state)
  );
  const sortedArchivedActivities = useSelector((state: IRootState) =>
    sortedArchivedActivitiesSelector(state)
  );
  const [tabSelected, setTabSelected] = React.useState<"feeds" | "archived">(
    "feeds"
  );
  return (
    <>
      <WrapperHeaderActivities>
        <StyledTab
          onClick={() => setTabSelected("feeds")}
          active={tabSelected === "feeds"}
        >
          <StyledTitle>Activities</StyledTitle>
        </StyledTab>
        <StyledTab
          onClick={() => setTabSelected("archived")}
          active={tabSelected === "archived"}
        >
          {/* <img src={archiveIcon} alt="" width="30px" /> */}
          <StyledTitle>Archived</StyledTitle>
        </StyledTab>
      </WrapperHeaderActivities>
      <TabContent isVisible={tabSelected === "feeds"}>
        {sortedActivities.map(([date, activities]) => (
          <BlockActivities key={date} dayDate={date}>
            <ActivityList activities={activities} goToDetail={() => {}} />
          </BlockActivities>
        ))}
      </TabContent>
      <TabContent isVisible={tabSelected === "archived"}>
        {sortedArchivedActivities.map(([date, activities]) => (
          <BlockActivities key={date} dayDate={date}>
            <ActivityList activities={activities} goToDetail={() => {}} />
          </BlockActivities>
        ))}
      </TabContent>
    </>
  );
};
