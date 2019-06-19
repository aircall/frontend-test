import { Call } from './call.model';

export const getDateAsString = (() => {
  const formatter = new Intl.DateTimeFormat('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  return (date: Date) => {
    return formatter.format(date);
  };
})();

export const getTimeAsString = (() => {
  const formatter = new Intl.DateTimeFormat('en-GB', { hour: 'numeric', minute: 'numeric' });
  return (date: Date) => {
    return formatter.format(date);
  };
})();

export function getDisplayName(call: Call) {
  return call.direction === 'inbound' ? call.from : call.to;
}

export function getViaDesc(call: Call) {
  switch (call.callType) {
    case 'answered':
      return `called on ${call.via}`;
    case 'missed':
    case 'voicemail':
      return `tried to call on ${call.via}`;
  }
}

export function getDurationAsString(duration: number) {
  // tslint:disable:no-magic-numbers
  return `${('' + Math.floor(duration / 60)).padStart(2, '0')}:${('' + (duration % 60)).padStart(2, '0')}`;
}
