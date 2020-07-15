import styled from 'styled-components';

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

export const NavWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.white};
  border-top: 0.0625rem solid ${({ theme }) => theme.colors.muted};
`;

export const NavIcon = styled.img<{ active?: boolean }>`
  padding: 1rem;
  border-bottom: ${({ theme, active }) =>
    active ? `0.25rem solid ${theme.colors.primary}` : 'none'};
  height: 1.5rem;
  display: block;
`;
