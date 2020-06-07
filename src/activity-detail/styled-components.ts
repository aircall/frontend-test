import styled from 'styled-components';

export const InfoList = styled.ul`
  list-style-type: none;
  margin: ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.MARGIN} 0;
  border: 0.0625rem solid ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.BORDER_COLOR};
`

export const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.ITEM_SPACING};
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.ZEBRA_COLOR_EVEN};
  }
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.INFO_LIST.ZEBRA_COLOR_ODD};
  }
`

export const InfoLabel = styled.label`
  font-weight: bold;
`

export  const InfoValue = styled.label`
  text-transform: capitalize;
`

export const Error = styled.p`
  color: ${({ theme }) => theme.COMPONENTS.ACTIVITY_DETAIL.ERROR.COLOR};
`;