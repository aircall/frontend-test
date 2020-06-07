import React from "react";
import { useRecoilValue } from "recoil";
import { activityByIdState } from "../../selectors";

export type Props = {
  id: number;
};

export function Activity({ id }: Props) {
  const activity = useRecoilValue(activityByIdState(id));

  return <section>{activity?.from}</section>;
}
