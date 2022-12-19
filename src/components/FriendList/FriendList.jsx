import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styles';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
