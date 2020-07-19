import styled from 'styled-components';
import inbound from '../asset/inbound.svg';
import outbound from '../asset/outbound.svg';

export const DirectionIcon = styled.i<{ direction: 'inbound' | 'outbound' }>`
  background-image: ${({ direction }) =>
    direction === 'inbound' ? `url(${inbound})` : `url(${outbound})`};
  width: 1.5rem;
  height: 1.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
`;
