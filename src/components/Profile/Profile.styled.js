import styled from 'styled-components';

export const ProfileStyled = styled.div`
  display: block;
  margin: 25px auto;
  width: 300px;
  text-align: center;
  background-color: inherit;
`;

export const DescriptionStyled = styled.div`
  padding: 25px 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #ffffff;
`;

export const AvatarStyled = styled.img`
  width: 100px;
  heigth: 100px;
`;

export const UserNameStyled = styled.p`
  font-size: 28px;
  font-weight: bold;
`;

export const UserTagStyled = styled.p`
  font-size: 18px;
`;

export const UserLocationStyled = styled.p`
  font-size: 22px;
`;

export const UserStatsStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #aaabbd;
`;

export const UserStatsItemStyled = styled.li`
  width: 33%;
  padding: 10px 5px;
  border-top: 1px solid grey;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  :first-child {
    border-right: 1px solid grey;
  }
  :last-child {
    border-left: 1px solid grey;
  }
`;

export const UserLabelStyled = styled.span`
  display: block;
  font-size: 18px;
`;

export const UserLabelValueStyled = styled.span`
  display: block;
  font-size: 22px;
  font-weight: bold;
`;
