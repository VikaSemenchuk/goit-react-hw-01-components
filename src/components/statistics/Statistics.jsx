import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ data, title }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
    <div className="container">
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.list}>
        {data.map(i => (
          <li
            key={i.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{i.label}</span>
            <span className={css.percentage}>{i.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
