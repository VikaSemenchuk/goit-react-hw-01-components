import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from '../friendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <div className="container">
      <ul className={css.list}>
        {friends.map(friend => (
          <li key={friend.id} className={css.item}>
            <FriendListItem friends={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
