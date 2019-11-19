import React, { useContext, useEffect } from "react";

import { Store } from "../StoreContext";

import { FEED, FEED_SUCCESS, FEED_ERROR } from "../../data/action";

import CallCardGroup from "../CallCard/CallCardGroup";

import fetch from "../../utils/fetch";

export default function Feed(props) {
  const {
    state: {
      feed: { loading, error, data }
    },
    dispatch
  } = useContext(Store);

  useEffect(() => {
    dispatch(FEED);
    fetch
      .get("/activities")
      .then(data => dispatch(FEED_SUCCESS, data))
      .catch(error => dispatch(FEED_ERROR, error));
  }, []);

  if (loading) {
    return "Loading..";
  }

  if (error) {
    return JSON.stringify(error);
  }

  return data.map(([date, calls]) => (
    <CallCardGroup key={date} date={date} calls={calls} />
  ));
}
