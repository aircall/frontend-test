import { Networking } from './Networking'
import {
  IActivityResponse,
  IActivitiesListResponse,
  IActivityUpdateRequestBody,
  IActivity
} from '../shared/api-types'

export class ActivityNetworking {
  private networking: Networking

  constructor(networking: Networking) {
    this.networking = networking
  }

  public async getActivitiesList(): Promise<IActivity[]> {
    return this.networking.get<IActivity[]>(`/activities`)
  }

  public async getActivityById(id: string): Promise<IActivity> {
    return this.networking.get<IActivity>(`/activities/${id}`)
  }

  public async updateActivity(id: string, is_archived: boolean): Promise<IActivity> {
    const body: IActivityUpdateRequestBody = { is_archived }
    return this.networking.post<IActivity>(`/activities/${id}`, body)
  }
}
