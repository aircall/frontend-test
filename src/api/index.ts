import { Networking } from './Networking'
import { ConfigService } from '../services/ConfigService'
import { ActivityNetworking } from './ActivityNetworking'

const networking = new Networking(ConfigService.url, ConfigService.authToken)
const activityNetworking = new ActivityNetworking(networking)

const api = {
  networking,
  activity: activityNetworking
}

export default api
