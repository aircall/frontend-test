import { createActions } from 'reduxsauce';
import { ActivitiesApi } from '../api/activities';

export const { Types: ActivitiesTypes, Creators: ActivitiesCreators } = createActions(
  {
    setList: ['list'],
    addItem: ['item'],
    fetch: () => (dispatch) => {
      return ActivitiesApi.fetch()
        .then(activities => dispatch(ActivitiesCreators.setList(
          activities.sort((a, b) => new Date(a.date) - new Date(b.date))
        )));
    },
    getById: (id) => (dispatch) => {
      return ActivitiesApi.getById(id)
        .then(activity => dispatch(ActivitiesCreators.addItem(activity)));
    },
    updateArchivedState: (id, isArchived) => (dispatch) => {
      return ActivitiesApi.updateArchivedState(id, isArchived)
        .then(activity => dispatch(ActivitiesCreators.addItem(activity)));
    }
  },
  {
    prefix: 'ACTIVITIES.',
  }
);
