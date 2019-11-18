import { Networking } from './Networking'
import {
  IActivityResponse,
  IActivitiesListResponse,
  IActivityUpdateRequestBody
} from '../shared/api-types'

export class ActivityNetworking {
  private networking: Networking

  constructor(networking: Networking) {
    this.networking = networking
  }

  public async getActivitiesList(): Promise<IActivitiesListResponse> {
    return this.networking.get<IActivitiesListResponse>(`/activities`)
  }

  public async getActivityById(id: string): Promise<IActivityResponse> {
    return this.networking.get<IActivityResponse>(`/activities/${id}`)
  }

  public async updateActivity(id: string, is_archived: boolean): Promise<IActivityResponse> {
    const body: IActivityUpdateRequestBody = { is_archived }
    return this.networking.post<IActivityResponse>(`/activities/${id}`, body)
  }
}
