import React, { useContext, useEffect } from "react";

import { Store } from "../StoreContext";
import {
  TOGGLE_SHOW_ARCHIVES,
  RESET_STATE,
  RESET_STATE_SUCCESS,
  FEED,
  FEED_SUCCESS,
  FEED_ERROR,
  RESET_STATE_ERROR
} from "../../data/action";

import fetch from "../../utils/fetch";
import Logo from "../Logo";

export default function Header() {
  const {
    state: {
      showArchivedCalls,
      reset: { loading }
    },
    dispatch
  } = useContext(Store);

  useEffect(() => {
    feather.replace();
  });

  const toggleArchive = () => {
    dispatch(TOGGLE_SHOW_ARCHIVES, !showArchivedCalls);
  };

  const handleReset = () => {
    if (!loading) {
      dispatch(RESET_STATE);
      fetch
        .get("/reset")
        .then(() => {
          dispatch(RESET_STATE_SUCCESS);
          dispatch(FEED);
          fetch
            .get("/activities")
            .then(data => dispatch(FEED_SUCCESS, data))
            .catch(error => dispatch(FEED_ERROR, error));
        })
        .catch(error => dispatch(RESET_STATE_ERROR, error));
    }
  };

  return (
    <header>
      <Logo />
      <div className="header__btn-group">
        <button
          className="header__btn"
          data-disabled={loading}
          onClick={handleReset}
        >
          <i data-feather="refresh-ccw" className="header__btn-icon" />
        </button>
        <button
          className="header__btn"
          onClick={toggleArchive}
          data-active={showArchivedCalls}
        >
          <i data-feather="archive" className="header__btn-icon" />
        </button>
      </div>
    </header>
  );
}
