import { format } from "date-fns";
import { IActivity, TFormatedActivity } from "../types";

export function formatDate(date: string) {
  return format(new Date(date), "MMMM, dd yyyy");
}

export function formatDateToHourMinutes(date: string) {
  return format(new Date(date), "hh:mm aa");
}

export function formateCompleteData(date: string) {
  return format(new Date(date), "MMMM, dd yyyy, hh:mm aa");
}

export function groupByDate(activities: IActivity[]) {
  const dates = Array.from(
    new Set(
      activities.map((activity: IActivity) => formatDate(activity.created_at))
    )
  );
  const sortedActivities = new Map<string, TFormatedActivity[]>();
  for (let i = 0; i < dates.length; i += 1) {
    sortedActivities.set(
      dates[i],
      activities
        .filter(
          (activity: IActivity) => formatDate(activity.created_at) === dates[i]
        )
        .map((activity: IActivity) => {
          const formatedHour = formatDateToHourMinutes(
            activity.created_at
          ).split(" ");
          return {
            ...activity,
            call_hour: formatedHour[0],
            hour_side: formatedHour[1]
          };
        })
    );
  }
  return sortedActivities;
}
