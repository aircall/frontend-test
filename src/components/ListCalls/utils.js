import React from 'react';
import dayjs from 'dayjs';

export function insertDateSeparator(call, previousCall) {
    const callDay = dayjs(call.created_at).day();
    const previousCallDay =
        previousCall && dayjs(previousCall.created_at).day();

    return callDay !== previousCallDay ? (
        <div className="list-calls-date" key={call.created_at}>
            {dayjs(call.created_at).format('MMMM, DD YYYY')}
        </div>
    ) : null;
}