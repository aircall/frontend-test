import {getResource} from './baseAPI';

export function getFeeds() {
  return getResource('activities');
}
