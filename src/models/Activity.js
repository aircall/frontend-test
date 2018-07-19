export default class Activity {
  constructor(
    id,
    createdAt,
    direction,
    from,
    to,
    via,
    duration,
    isArchived,
    callType,
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.direction = direction;
    this.from = from;
    this.to = to;
    this.via = via;
    this.duration = duration;
    this.isArchived = isArchived;
    this.callType = callType;
  }

  static fromJson(json) {
    return new Activity(
      json.id,
      json.created_at,
      json.direction,
      json.from,
      json.to,
      json.via,
      json.duration,
      json.is_archived,
      json.call_type,
    );
  }

  static getAll() {
    return fetch('https://aircall-job.herokuapp.com/activities')
      .then(response => response.json())
      .then(activiesJson => activiesJson.map(activityJson => Activity.fromJson(activityJson)));
  }

  static getById(id) {
    return fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then(response => response.json())
      .then(activityJson => Activity.fromJson(activityJson));
  }
}

export const ACTIVITY_DIRECTION = {
  inbound: 'inbound',
  outbound: 'outbound',
};

export const ACTIVITY_CALL_TYPE = {
  answered: 'answered',
  missed: 'missed',
  voicemail: 'voicemail',
};
