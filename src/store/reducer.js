export const initialState = {
    activitiesLoading: false,
    activities: [],
    activity: {}
};

export default function reducer(state=initialState, { type, payload }) {
    switch(type) {
        case "FETCH_ACTIVITIES":
            return {
                ...state,
                activitiesLoading: true
            };
        case "FETCH_ACTIVITIES_SUCCESS":
            return {
                ...state,
                activitiesLoading: false,
                activities: payload
            };
        case "FETCH_ACTIVITY_SUCCESS":
            return {
                ...state,
                activity: payload
            };
        default:
            return state;
    }
}