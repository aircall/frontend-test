import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadedState } from '../store/actions/appStateActions';

import CallDetailView from '../components/CallDetailView';
import CallListItem from '../components/CallListItem';

const ActivitiyContainer = () => {
  const { DATA_SOURCE } = process.env;
  const calls = useSelector((state) => state.calls);
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  const callAPIForData = () => {
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
        const filteredData = res.filter((call) => !call.is_archived);
        return filteredData;
      })
      .then((res) => dispatch(loadedState(res)));
  };

  useEffect(callAPIForData, []);

  let detailView = null;
  if (detail) {
    const {
      id,
      createdAt,
      direction,
      to: callTo,
      from: callFrom,
      via,
      call_type: callType,
    } = detail;
    detailView = (
      <CallDetailView
        id={id}
        createdAt={createdAt}
        direction={direction}
        callTo={callTo}
        callFrom={callFrom}
        via={via}
        call_type={callType}
      />
    );
  }

  if (calls) {
    return (
      <React.Fragment>
        <button type="button" onClick={() => callAPIForData()}>Restore all</button>
        <ul className="call-list">
          {
          calls.map((call, i) => {
            const {
              id,
              created_at: createdAt,
              direction,
              to: callTo,
              from: callFrom,
              via,
              call_type: callType,
            } = call;
            return (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`id-${id}-${i}`}>
                <CallListItem
                  id={id}
                  createdAt={createdAt}
                  direction={direction}
                  callTo={callTo}
                  callFrom={callFrom}
                  via={via}
                  call_type={callType}
                />
              </li>
            );
          })
        }
        </ul>
        { detailView }
      </React.Fragment>
    );
  }

  return <div>LOADING .....</div>;
};

export default ActivitiyContainer;
