import styled from 'styled-components';

export const ItemWrapper = styled.div`
  border-radius: 1rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.light};
  text-decoration: none;
  margin: 1rem;
  display: flex;
  align-items: center;
  padding: 0.7rem 0rem 0.7rem 1rem;
`;

export const Icon = styled.img`
  height: 1.5rem;
  margin: 0 1rem;
`;

export const FromLabel = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 0.25rem;
`;

export const ToLabel = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.muted};
`;

export const InfoWrapper = styled.div`
  padding: 0 1rem;
`;

export const TimeLabel = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.muted};
  padding: 0.25rem 0 0.25rem 0.8rem;
  margin-left: auto;
  font-weight: bold;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.muted} 20%, #fff 0%)`};
  background-position: left;
  background-size: 1px 5px;
  background-repeat: repeat-y;
  > span {
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-left: 0.25rem;
    border-radius: 0.25rem 0 0 0.25rem;
    border: 0.0625rem solid ${({ theme }) => theme.colors.light};
    border-right: 0;
    padding: 0.0625rem 0.25rem;
  }
`;
