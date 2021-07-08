import { get, post } from '../helpers/api'

export const fetchActivities = async () => get('activities')
export const fetchActivityDetail = async id => get(`activities/${id}`)
export const archiveActivity = async (id) => post(`activities/${id}`, JSON.stringify({ is_archived: true }))
export const resetActivitiesArchives = async () => get('reset')
