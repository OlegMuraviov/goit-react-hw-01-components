import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import Friend from 'components/Friend/Friend';

const FriendList = ({ friends }) => {
  return (
    <ul className={s['friend-list']}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <Friend key={id} isOnline={isOnline} avatar={avatar} name={name} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
