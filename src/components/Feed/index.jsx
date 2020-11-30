import React, { useContext, useEffect } from "react";

import { Store } from "../StoreContext";

import CallCardGroup from "../CallCard/CallCardGroup";

export default function Feed() {
  const {
    state: {
      feed: { loading, error, data },
      showArchivedCalls
    }
  } = useContext(Store);

  if (loading) {
    return "Loading..";
  }

  if (error) {
    return JSON.stringify(error);
  }

  return data.map(([date, calls], index) => {
    if (
      showArchivedCalls ||
      (!showArchivedCalls && !calls.every(call => call.is_archived))
    ) {
      return (
        <CallCardGroup
          key={date}
          date={date}
          calls={calls}
          showArchivedCalls={showArchivedCalls}
          groupIndex={index}
        />
      );
    }

    return null;
  });
}
