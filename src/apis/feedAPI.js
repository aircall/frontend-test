import { getResource, postResource } from './baseAPI';

export function getFeeds() {
  return getResource('activities');
}

export function getDetail(activityId) {
  return getResource(`activities/${activityId}`);
}

export function getResetAll(activityId) {
  return getResource('reset');
}

export function archiveCall(activityId) {
  return postResource(`activities/${activityId}`, {
    payload: { is_archived: true },
  });
}
