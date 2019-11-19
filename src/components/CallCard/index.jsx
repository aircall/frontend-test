import React, { useContext, useEffect } from "react";

import { Store } from "../StoreContext";

import {
  DETAIL_VIEW,
  ARCHIVE,
  ARCHIVE_SUCCESS,
  ARCHIVE_ERROR
} from "../../data/action";

import CallCardCompact from "./CallCardCompact";
import CallCardDetail from "./CallCardDetail";

import fetch from "../../utils/fetch";

export default function CallCard({
  data: {
    id,
    direction,
    from,
    to,
    via,
    duration,
    call_type,
    callTime,
    is_archived
  },
  callIndex,
  groupIndex
}) {
  const {
    state: {
      detailView,
      archive: { [id]: thisArchive = {} }
    },
    dispatch
  } = useContext(Store);
  const { loading, error } = thisArchive;

  const isActive = detailView === id;

  useEffect(() => {
    feather.replace();
  }, []);

  const handleDetailView = () => {
    if (!loading) {
      if (!isActive) {
        dispatch(DETAIL_VIEW, id);
      } else {
        dispatch(DETAIL_VIEW, null);
      }
    }
  };

  const handleArchive = e => {
    e.stopPropagation();
    dispatch(ARCHIVE, id);
    fetch
      .post(`/activities/${id}`, {
        is_archived: !is_archived
      })
      .then(() => {
        dispatch(ARCHIVE_SUCCESS, {
          callId: id,
          callIndex,
          groupIndex,
          isArchived: !is_archived
        });
        dispatch(DETAIL_VIEW, null);
      })
      .catch(error => dispatch(ARCHIVE_ERROR, id));
  };

  const getAppropriateNumber = (direction, from, to, inverse) =>
    direction === "outgoing" ? (inverse ? from : to) : inverse ? to : from;

  return (
    <div
      className="call-card"
      id={id}
      onClick={handleDetailView}
      data-active={isActive && !loading}
      data-archiving={loading}
      data-archived={is_archived}
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
        direction={direction}
        onArchive={handleArchive}
      />
    </div>
  );
}
