import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format } from 'date-fns';

const BORDER_COLOR = {
  missed: '#f98798',
  answered: '#28c420',
  default: '#ececeb',
};

const Wrapper = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid ${({ callType }) => BORDER_COLOR[callType] || BORDER_COLOR.default};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.8rem;
  cursor: pointer;

  h5{
    font-size: 1.3rem;
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
  }
`;

const DateBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  top: 1.2rem;
  right: 0.6rem;
  color: #8a8888;
`;

const CallItem = ({
  to,
  from,
  via,
  time,
  callType,
  direction,
  onClick,
}) => {
  const directionIcon = direction === 'outbound' ? '↖️' : '↘️';

  return (
    <Wrapper callType={callType} onClick={onClick}>
      <h5>{`${directionIcon} ${to || 'Unknown'}`}</h5>
      <p>{`${from} - ${via}`}</p>
      <DateBox>{format(new Date(time), 'dd/MM HH:mm')}</DateBox>
    </Wrapper>
  );
};

CallItem.propTypes = {
  to: PropTypes.string,
  from: PropTypes.string.isRequired,
  via: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  callType: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

CallItem.defaultProps = {
  to: undefined,
};

export default CallItem;
