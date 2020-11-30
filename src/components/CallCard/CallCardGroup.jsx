import React from "react";

import CallCard from "./";

export default function CallCardGroup({
  calls,
  date,
  showArchivedCalls,
  groupIndex
}) {
  return (
    <section className="call-card__group">
      <p className="call-card__group-title">{date}</p>
      {calls.map((call, index) =>
        showArchivedCalls || (!showArchivedCalls && !call.is_archived) ? (
          <CallCard
            key={call.id}
            data={call}
            callIndex={index}
            groupIndex={groupIndex}
          />
        ) : null
      )}
    </section>
  );
}
