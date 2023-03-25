import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className="container">
      <div className="description">
        <img
          src={avatar}
          width="150px"
          height="150px"
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats_list}>
        <li className={css.stats_item}>
          <span className={css.stats_label}>Followers</span>
          <span className={css.stats_quantity}>{stats.followers}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.stats_label}>Views</span>
          <span className={css.stats_quantity}>{stats.views}</span>
        </li>
        <li className={css.stats_item}>
          <span className={css.stats_label}>Likes</span>
          <span className={css.stats_quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};
