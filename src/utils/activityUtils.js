export const activityDirections = {
  INBOUND: 'inbound',
  OUTBOUND: 'outbound'
};

export const activityCallTypes = {
  MISSED: 'missed',
  ANSWERED: 'answered',
  VOICEMAIL: 'voicemail'
};

/**
 * 
 * @param {object} activity — the activity you're trying to parse.
 */
export const parseActivityStatus = (activity) => {
  let status = `called ${activity.to}`;

  if (activity.direction === activityDirections.OUTBOUND && activity.call_type === activityCallTypes.MISSED) {
    status = `tried to call ${activity.to}`;
  } else if (
    activity.direction === activityDirections.OUTBOUND && activity.call_type === activityCallTypes.ANSWERED
  ) {
    status = `called ${activity.to}`;
  } else if (activity.direction === activityDirections.INBOUND && activity.call_type === activityCallTypes.MISSED) {
    status = `${activity.from} tried to call ${activity.to}`;
  } else if (activity.direction === activityDirections.INBOUND && activity.call_type === activityCallTypes.VOICEMAIL) {
    status = 'left a voicemail';
  }

  return status;
};
