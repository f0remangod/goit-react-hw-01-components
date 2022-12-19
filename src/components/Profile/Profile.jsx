import PropTypes from 'prop-types';
import {
  UserAvatar,
  UserNickname,
  UserLocation,
  UserName,
  StatsLable,
  StatsQuantity,
  StatsItem,
  StatsList,
  DescrWrapper,
  ProfileWrapper,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <DescrWrapper>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserNickname>@{tag}</UserNickname>
        <UserLocation>{location}</UserLocation>
      </DescrWrapper>

      <StatsList>
        <StatsItem>
          <StatsLable>Followers</StatsLable>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLable>Views</StatsLable>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLable>Likes</StatsLable>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </StatsList>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number.isRequired),
};
