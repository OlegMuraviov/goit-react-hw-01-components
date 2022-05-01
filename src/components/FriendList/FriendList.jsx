import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s['friend-list']}>
      {friends.map(element => (
        <li key={element.id} className={s.item}>
          <span
            className={s.status}
            style={{
              backgroundColor: element.isOnline ? 'green' : 'red',
            }}
          ></span>
          <img
            className={s.avatar}
            src={element.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{element.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
