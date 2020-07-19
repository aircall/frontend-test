import styled from 'styled-components';

export const FeedWrapper = styled.div`
  padding: 1rem 0;
`;
export const DateLabel = styled.span`
  letter-spacing: 0.125rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.muted};
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.white};
  padding: 0 0.5rem;
`;

export const DateWrapper = styled.div`
  text-align: center;
  background-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.muted} 33%, #fff 0%)`};
  background-position: center;
  background-size: 8px 1px;
  background-repeat: repeat-x;
`;
