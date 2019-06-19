export type CallApi = {
  id: number;
  created_at: string;
  direction: 'inbound' | 'outbound',
  from: string;
  to: string;
  via: string;
  duration: string;
  is_archived: boolean;
  call_type: 'missed' | 'answered' | 'voicemail';
};

export type Call = Pick<CallApi, 'id' | 'direction' | 'from' | 'to' | 'via'> & {
  createdAt: Date;
  duration: number;
  isArchived: CallApi['is_archived'];
  callType: CallApi['call_type'];
};

export function fromApi(api: CallApi): Call {
  return {
    id: api.id,
    createdAt: new Date(api.created_at),
    direction: api.direction,
    from: api.from,
    to: api.to,
    via: api.via,
    duration: parseInt(api.duration, 10),
    isArchived: api.is_archived,
    callType: api.call_type,
  };
}
