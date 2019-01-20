import {ApiService} from "./index";

export class ActivitiesApi {
  static fetch() {
    return ApiService.get('/activities');
  }

  static getById(id) {
    return ApiService.get(`/activities/${id}`);
  }

  static updateArchivedState(id, isArchived) {
    return ApiService.post(`/activities/${id}`, { isArchived });
  }
}