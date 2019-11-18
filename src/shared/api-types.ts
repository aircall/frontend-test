export interface IActivity {
  id: number
  created_at: string
  direction: string
  from: string
  to: string
  via: string
  duration: string
  is_archived: boolean
  call_type: string
}

export interface IActivitiesListResponse {
  activities: IActivity[]
}

export interface IActivityResponse {
  activity: IActivity
}

export interface IActivityUpdateRequestBody {
  is_archived: boolean
}
