import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendItem = ({isOnline, avatar, name}) => {
    return <li className={css.item}>
    <span className={isOnline ? css.green : css.red}>{isOnline}</span>
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </li>
}

FriendItem.propTypes = {
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
}

export default FriendItem;