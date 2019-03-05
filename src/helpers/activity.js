import { missedCallTypes } from './constants';

export function getActivityIds(activities) {
    return Object.keys(activities);
}

export function getMissedCallCount(activities) {
    let totalMissedActivities = 0;

    getInbox(activities).forEach(activity => {
        if (activity.call_type && missedCallTypes.includes(activity.call_type)) {
            totalMissedActivities += 1;
        }
    });

    return totalMissedActivities;
};

export function isMissedCall(call_type) {
    return missedCallTypes.includes(call_type);
}


export function getInbox(activities) {
    return getActivities(activities).filter(activity => {
        const { is_archived } = activity;
        
        if (!is_archived) {
            return activity;
        };
    });
};

export function getActivityById(id, activities) {
    return activities[id];
}

export function getActivities(activities) {
    return getActivityIds(activities).map(activityId => {
        return activities[activityId];
    });
}

export function getActiveList(activeNav, activities) {
    switch (activeNav) {
        case 'inbox':
            return getInbox(activities)

        case 'all':
            return getActivities(activities)

        default:
            return getActivities(activities)
    };
};