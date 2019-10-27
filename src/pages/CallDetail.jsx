import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchCallDetails } from '../actions/feed';

const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CallDetail = React.memo(({
  callId,
  detailData,
  onFetchCallDetails,
  onClose,
}) => {
  useEffect(
    () => {
      onFetchCallDetails(callId);
    },
    [callId, onFetchCallDetails],
  );

  return (
    <DetailWrapper>
      100
    </DetailWrapper>
  );
});

CallDetail.propTypes = {
  callId: PropTypes.number.isRequired,
  // eslint-disable-next-line
  detailData: PropTypes.object,
  onFetchCallDetails: PropTypes.func.isRequired,
};

CallDetail.defaultProps = {
  detailData: {},
};

function mapStateToProps(state) {
  const { details } = state.feed;
  return {
    details,
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
