import {
  parseActivityStatus,
  activityCallTypes,
  activityDirections
} from './activityUtils';
import {
  activity
} from './mocks';

describe('test parseActivityStatus', () => {
  it('should format the status for OUTBOUND and MISSED', () => {
    expect(parseActivityStatus(activity)).toEqual('tried to call 06 46 62 12 33');
  });

  it('should format the status for OUTBOUND and ANSWERED', () => {
    expect(parseActivityStatus({ ...activity,
      call_type: activityCallTypes.ANSWERED
    })).toEqual('called 06 46 62 12 33');
  });

  it('should format the status for INBOUND and MISSED', () => {
    expect(parseActivityStatus({ ...activity,
      direction: activityDirections.INBOUND
    })).toEqual('Pierre-Baptiste Béchu tried to call 06 46 62 12 33');
  });

  it('should format the status for INBOUND and VOICEMAIL', () => {
    expect(parseActivityStatus({ ...activity,
      direction: activityDirections.INBOUND,
      call_type: activityCallTypes.VOICEMAIL
    })).toEqual('left a voicemail');
  });
});
