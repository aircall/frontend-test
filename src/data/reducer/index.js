import FeedReducer from "./feed.reducer";
import DetailViewReducer from "./detail-view.reducer";
import ArchiveReducer from "./archive.reducer";
import ResetReducer from "./reset.reducer";
import { TOGGLE_SHOW_ARCHIVES } from "../action";

const combinedReducers = {
  ...FeedReducer,
  ...DetailViewReducer,
  ...ResetReducer,
  ...ArchiveReducer,
  [TOGGLE_SHOW_ARCHIVES](state, showArchivedCalls) {
    return {
      ...state,
      showArchivedCalls
    };
  }
};

export default function Reducer(state, { type, payload }) {
  const reducer = combinedReducers[type];
  if (!reducer) {
    console.error(`No reducer to handle action ${type} found!`);
    return {};
  }

  return reducer(state, payload);
}
