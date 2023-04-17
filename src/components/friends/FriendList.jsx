import FriendItem from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FriendList;
