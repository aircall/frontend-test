import { getResource } from './baseAPI';

export function getFeeds() {
  return getResource('activities');
}

export function getDetail(activityId) {
  return getResource(`activities/${activityId}`);
}
