import * as React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  fetchActivityDetailAction,
  resetActivityAction,
  archiveActivityAction
} from "../../Redux/Actions";
import { IRootState, IActivity } from "../../types";

type TChildren = {
  activity: IActivity;
  goBack: () => void;
  activityHandler: () => void;
};
interface IProps {
  children: (props: TChildren) => React.ReactNode;
}
export const ActivityDetailContainer: React.FC<IProps> = ({ children }) => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const activity = useSelector(
    (state: IRootState) => state.entity.activityDetail,
    shallowEqual
  );
  // well, I need to make it any, too lazy :-)
  const dispatch = useDispatch() as any;

  const goBack = () => {
    history.push("/");
  };
  const activityHandler = () => {
    if (activity?.is_archived) {
      dispatch(resetActivityAction(id, false)).then(goBack);
    } else {
      dispatch(archiveActivityAction(id, true)).then(goBack);
    }
  };

  React.useEffect(() => {
    dispatch(fetchActivityDetailAction(id));
  }, [id]);

  return <>{children({ activity, activityHandler, goBack })}</>;
};
