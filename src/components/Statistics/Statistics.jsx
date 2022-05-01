import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { getRandomColor } from './getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title.toUpperCase()}</h2>}

      <ul className={s['stat-list']}>
        {stats.map(element => (
          <li
            key={element.id}
            className={s.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={s.label}>{element.label}</span>
            <span className={s.percentage}>{element.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
