import React from "react";
import { RouteChildrenProps } from "react-router-dom";

export type Props = RouteChildrenProps<{ id: string }>;

export function ActivityDetail(props: Props) {
  return <>Activity detail: {props.match?.params.id}</>;
}
