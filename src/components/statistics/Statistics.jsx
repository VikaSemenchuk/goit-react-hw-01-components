import { StatisticsListItems } from './StatisticsListItem';

export const Statistics = ({ data, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title"></h2>}

      <ul className="stat-list">
        {data.map(i => (
          <li key={i.id} className="item">
            <StatisticsListItems data={i} />
          </li>
        ))}
      </ul>
    </section>
  );
};
