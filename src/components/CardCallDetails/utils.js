import { pluralize } from '../../utils';

export function formatCallDuration(callDuration) {
    const minutes = Math.floor(callDuration / 60);
    const seconds = callDuration - minutes * 60;

    return minutes
        ? `${minutes} ${pluralize('minute', minutes)}`
        : `${seconds} seconds`;
}

export function getCallHeading(callType, callDirection) {
    switch (callType) {
        case 'missed':
            return 'Missed call';
        case 'voicemail':
            return 'Voicemail';
        default:
            return callDirection === 'inbound'
                ? 'Incoming call'
                : 'Outgoing call';
    }
}
