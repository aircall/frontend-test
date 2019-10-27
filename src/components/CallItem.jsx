import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';

const BORDER_COLOR = {
  missed: '#f98798',
  answered: '#87f994',
  default: '#ececeb',
};

const Wrapper = styled.div`
  background: #fff;
  border: 2px solid ${({ callType }) => BORDER_COLOR[callType] || BORDER_COLOR.default};
  border-radius: 1.5rem;
  padding: 0.5rem 1rem;
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
      <p>{`${from} via ${via}`}</p>
      <p>{format(new Date(time), 'dd/MM HH:mm')}</p>
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
