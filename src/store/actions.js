export const fetchActivities = () => ({
    type: "FETCH_ACTIVITIES"
});

export const fetchActivity = (id) => ({
    type: "FETCH_ACTIVITY",
    payload: id
});

export const archiveActivity = (id) => ({
    type: "ARCHIVE_ACTIVITY",
    payload: id
});

export default {
    fetchActivities,
    fetchActivity,
    archiveActivity
};