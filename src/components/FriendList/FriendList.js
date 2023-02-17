import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
      <ul className={css.friendList}>
        {friends.map(friend => (
        <li className={css.item} key={friend.id}>
        <span className={css.status}
        style={
            friend.isOnline
              ? { backgroundColor: 'green' }
              : { backgroundColor: 'red' }
          }></span>
        <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={css.name}>{friend.name}</p>
      </li>
        ))}
      </ul>
    );
  };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };
  