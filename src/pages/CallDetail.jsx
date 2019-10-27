import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { format } from 'date-fns';

import { fetchCallDetails } from '../actions/feed';

const DetailWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(5px);
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
  padding: 1.5rem;
`;


const CallDetail = React.memo(({
  callId,
  detailData,
  onFetchCallDetails,
  onClose,
}) => {
  const currentDetail = detailData[callId];
  console.log(currentDetail);

  useEffect(
    () => {
      onFetchCallDetails(callId);
    },
    [callId, onFetchCallDetails],
  );

  const detailContent = typeof currentDetail === 'undefined'
    ? <span>Loading</span>
    : (
      <>
        <p>{`From: ${currentDetail.from}`}</p>
        <p>{`To: ${currentDetail.to}`}</p>
        <p>{`Call type: ${currentDetail.call_type}`}</p>
        <p>{`Direction: ${currentDetail.direction}`}</p>
        <p>{`Via: ${currentDetail.via}`}</p>
        <p>{`Duration: ${currentDetail.duration}`}</p>
        <p>{`Time: ${format(new Date(currentDetail.created_at), 'dd/MM/yyyy HH:mm')}`}</p>
      </>
    );

  return (
    <DetailWrapper>
      <Header>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Header>
      <DetailContent>
        {detailContent}
      </DetailContent>
    </DetailWrapper>
  );
});

CallDetail.propTypes = {
  callId: PropTypes.number.isRequired,
  // eslint-disable-next-line
  detailData: PropTypes.object,
  onFetchCallDetails: PropTypes.func.isRequired,
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
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CallDetail);
