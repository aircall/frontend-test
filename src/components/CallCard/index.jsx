import React, { useContext, useEffect } from "react";

import { Store } from "../StoreContext";

import { DETAIL_VIEW, ARCHIVE } from "../../data/action";

import CallCardCompact from "./CallCardCompact";
import CallCardDetail from "./CallCardDetail";

export default function CallCard({
  data: { id, direction, from, to, via, duration, call_type, callTime }
}) {
  const {
    state: { detailView },
    dispatch
  } = useContext(Store);

  const isActive = detailView === id;

  useEffect(() => {
    feather.replace();
  }, []);

  const handleDetailView = () => {
    if (!isActive) {
      dispatch(DETAIL_VIEW, id);
    } else {
      dispatch(DETAIL_VIEW, null);
    }
  };

  const handleArchive = e => {
    e.stopPropagation();
    // dispatch(ARCHIVE, id);
    // fetch.post(`/`)
  };

  const getAppropriateNumber = (direction, from, to, inverse) =>
    direction === "outgoing" ? (inverse ? from : to) : inverse ? to : from;

  return (
    <div
      className="call-card"
      id={id}
      onClick={handleDetailView}
      data-active={isActive}
      data-archiving={}
    >
      <CallCardCompact
        number={getAppropriateNumber(direction, from, to, false)}
        via={via}
        direction={direction}
        callType={call_type}
        callTime={callTime}
      />
      <CallCardDetail
        number={getAppropriateNumber(direction, from, to, true)}
        duration={duration}
        isActive={isActive}
        onArchive={handleArchive}
      />
    </div>
  );
}
