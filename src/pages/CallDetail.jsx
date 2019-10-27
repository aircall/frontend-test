import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { format } from 'date-fns';

import { fetchCallDetails, archiveCall } from '../actions/feed';

const DetailWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(5px);
  z-index: 1;
`;

const Header = styled.div`
  height: 3rem;
  position: relative;
`;

const CloseButton = styled.div`
  padding: 1rem 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 2px solid #ececeb;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const DetailContent = styled.div`
  padding: 1.8rem;
`;

const ArchiveButton = styled.div`
  padding: 1rem 1.5rem;
  background: #ececeb;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1.6rem;
`;

const CallDetail = React.memo(({
  callId,
  detailData,
  onFetchCallDetails,
  onArchiveCall,
  onClose,
}) => {
  const currentDetail = detailData[callId];

  useEffect(
    () => {
      onFetchCallDetails(callId);
    },
    [callId, onFetchCallDetails],
  );

  const handleArchiveClick = useCallback(
    () => {
      onArchiveCall(callId);
      onClose();
    },
    [callId, onArchiveCall, onClose],
  );

  const detailContent = typeof currentDetail === 'undefined'
    ? <span>Loading</span>
    : (
      <>
        <p>
          <b>From: </b>
          {currentDetail.from}
        </p>
        <p>
          <b>To: </b>
          {currentDetail.to}
        </p>
        <p>
          <b>Call type: </b>
          {currentDetail.call_type}
        </p>
        <p>
          <b>Direction: </b>
          {currentDetail.direction}
        </p>
        <p>
          <b>Via: </b>
          {currentDetail.via}
        </p>
        <p>
          <b>Duration: </b>
          {currentDetail.duration}
        </p>
        <p>
          <b>Time: </b>
          {format(new Date(currentDetail.created_at), 'dd/MM/yyyy HH:mm')}
        </p>
        <p>
          <b>Archived: </b>
          {currentDetail.is_archived}
        </p>
      </>
    );

  return (
    <DetailWrapper>
      <Header>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Header>
      <DetailContent>
        {detailContent}
        <ArchiveButton onClick={handleArchiveClick}>Archive</ArchiveButton>
      </DetailContent>
    </DetailWrapper>
  );
});

CallDetail.propTypes = {
  callId: PropTypes.number.isRequired,
  // eslint-disable-next-line
  detailData: PropTypes.object,
  onFetchCallDetails: PropTypes.func.isRequired,
  onArchiveCall: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

CallDetail.defaultProps = {
  detailData: {},
};

function mapStateToProps(state) {
  const { details } = state.feed;
  return {
    detailData: details,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onFetchCallDetails: (callId) => dispatch(fetchCallDetails(callId)),
    onArchiveCall: (callId) => dispatch(archiveCall(callId)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CallDetail);
