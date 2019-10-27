import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BORDER_COLOR = {
  missed: '#f98798',
  answered: '#87f994',
  default: '#ececeb',
};

const Wrapper = styled.div`
  background: #fff;
  border: 2px solid ${({ callType }) => BORDER_COLOR[callType] || BORDER_COLOR.default};
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  margin-top: 1rem;
`;

const CallItem = ({
  to,
  from,
  via,
  time,
  callType,
  direction,
}) => {
  const directionIcon = direction === 'outbound' ? '↖️' : '↘️';

  return (
    <Wrapper callType={callType}>
      <p>{`${directionIcon} ${to}`}</p>
      <p>{from}</p>
      <p>{via}</p>
      <p>{time}</p>
    </Wrapper>
  );
};

CallItem.propTypes = {
  to: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  via: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  callType: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default CallItem;
