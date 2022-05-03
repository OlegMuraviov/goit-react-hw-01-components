import PropTypes from 'prop-types';
import s from './Friend.module.css';

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span
        className={s.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      ></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default Friend;
