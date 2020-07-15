import styled from 'styled-components';

export const Container = styled.div`
  width: 376px;
  height: 666px;
  z-index: 100;
  background: white;
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
`;

export const ContainerView = styled.div`
  padding: 20px;
`;

export const Header = styled.header`
  height: 40px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
