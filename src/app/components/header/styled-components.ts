import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 2.5rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.COMPONENTS.APP.HEADER.PADDING} 0;
  text-align: center;
  box-shadow: 0 0.0625rem 0 rgba(0, 0, 0, 0.1);
`;

export const Svg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`;
