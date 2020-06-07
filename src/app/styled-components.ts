import styled from "styled-components";

export const Main = styled.main`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

export const Container = styled.div`
  width: 23.5rem;
  height: 41.625rem;
  z-index: 100;

  background: ${({ theme }) => theme.COMPONENTS.APP.BACKGROUND_COLOR};
  border-radius: 0.1875rem;
  box-shadow: 0 0 0.3125rem 0 rgba(0, 0, 0, 0.9);
`;

export const View = styled.div`
  padding: ${({ theme }) => theme.COMPONENTS.APP.PADDING};
`;
