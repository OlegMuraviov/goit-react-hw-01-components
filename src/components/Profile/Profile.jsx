import PropTypes from 'prop-types';
import {
  ProfileStyled,
  DescriptionStyled,
  AvatarStyled,
  UserNameStyled,
  UserTagStyled,
  UserLocationStyled,
  UserStatsStyled,
  UserStatsItemStyled,
  UserLabelStyled,
  UserLabelValueStyled,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileStyled className="profile">
      <DescriptionStyled className="description">
        <AvatarStyled src={avatar} alt="User avatar" className="avatar" />
        <UserNameStyled className="name">{username}</UserNameStyled>
        <UserTagStyled className="tag">{tag}</UserTagStyled>
        <UserLocationStyled className="location">{location}</UserLocationStyled>
      </DescriptionStyled>

      <UserStatsStyled className="stats">
        <UserStatsItemStyled>
          <UserLabelStyled className="label">Followers</UserLabelStyled>
          <UserLabelValueStyled>{stats.followers}</UserLabelValueStyled>
        </UserStatsItemStyled>
        <UserStatsItemStyled>
          <UserLabelStyled className="label">Views</UserLabelStyled>
          <UserLabelValueStyled>{stats.views}</UserLabelValueStyled>
        </UserStatsItemStyled>
        <UserStatsItemStyled>
          <UserLabelStyled className="label">Likes</UserLabelStyled>
          <UserLabelValueStyled>{stats.likes}</UserLabelValueStyled>
        </UserStatsItemStyled>
      </UserStatsStyled>
    </ProfileStyled>
  );
};
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};
export default Profile;
