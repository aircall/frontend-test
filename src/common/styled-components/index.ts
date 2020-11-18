import styled from 'styled-components';

import spinner from './images/spinner.svg';

export const Spinner = styled.div`
  background-image: url(${spinner});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 2rem;
`;