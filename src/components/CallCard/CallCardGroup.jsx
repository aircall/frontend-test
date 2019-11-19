import React from "react";

import CallCard from "./";

export default function CallCardGroup({ calls, date }) {
  return (
    <section className="call-card__group">
      <p className="call-card__group-title">{date}</p>
      {calls.map(call => (
        <CallCard key={call.id} data={call} />
      ))}
    </section>
  );
}
