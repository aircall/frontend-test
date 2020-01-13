/* eslint-disable react/jsx-fragments */
import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadedState } from '../store/actions/appStateActions';

import CallListItem from '../components/CallListItem';

const ActivitiyContainer = () => {
  const { DATA_SOURCE } = process.env;
  const calls = useSelector((state) => state.calls);
  const dispatch = useDispatch();

  // eslint-disable-next-line func-names
  const callAPIForData = function () {
    fetch(`${DATA_SOURCE}/activities`, {
      method: 'GET',
      headers: new Headers(
        {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      ),
    })
      .then((res) => res.json())
      .then((res) => {
        // eslint-disable-next-line no-console
        const filteredData = res.filter((call) => !call.is_archived);

        return filteredData;
      })
      .then((res) => dispatch(loadedState(res)));
  };

  useEffect(callAPIForData, []);

  if (calls) {
    return (
      <React.Fragment>
        <button type="button" onClick={() => callAPI()}>Restore all</button>
        <ul className="call-list">
          {
          calls.map((call, i) => {
            const { id } = call;
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`id-${id}-${i}`} className="callDetails">
                <CallListItem {...call} />
              </li>
            );
          })
        }
        </ul>
      </React.Fragment>
    );
  }

  return <div>LOADING .....</div>;
};

export default ActivitiyContainer;
