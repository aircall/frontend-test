import styled from 'styled-components';
import { Link } from 'react-router-dom';

import missed from '../../asset/missed.svg';
import answered from '../../asset/answered.svg';
import voicemail from '../../asset/voicemail.svg';

const icons = {
  missed,
  answered,
  voicemail,
};

export const DetailWrapper = styled.div`
  margin: 1rem 2rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ArrowWrapper = styled.div`
  margin: 0 0 0 2.5rem;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.muted} 20%, #fff 0%)`};
  background-position: left;
  background-size: 1px 5px;
  background-repeat: repeat-y;
  padding: 1rem 3.5rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const InfoWrapper = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.light};
  border: 0.0625rem solid ${({ theme }) => theme.colors.light};
  text-decoration: none;
  margin-top: 1rem;
`;
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserName = styled.div`
  font-size: blod;
`;

export const UserImg = styled.img`
  margin-right: 1rem;
  width: 5rem;
`;

export const CallTypeIcon = styled.i<{
  type: 'missed' | 'answered' | 'voicemail';
}>`
  background-image: ${({ type }) => `url(${icons[type]})`};
  width: 1.5rem;
  height: 1.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  display: inline-block;
`;

export const ArchivedLabel = styled.label`
  display: block;
  box-sizing: border-box;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.dark};
  width: 100%;
  border: 0.0625rem solid ${({ theme }) => theme.colors.muted};
  border-radius: 0.25rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.primary};
  margin-top: 2rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  cursor: pointer;
`;

export const BackLink = styled(Link)`
  display: block;
  margin: 1rem;
  text-decoration: underline;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;
