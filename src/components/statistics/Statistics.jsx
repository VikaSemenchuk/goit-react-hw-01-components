import { StatisticsListItems } from './StatisticsListItem';

export const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

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
