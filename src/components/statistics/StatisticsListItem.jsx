
export const StatisticsListItems = ({ data }) => {
  const { label, percentage } = data;

  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </>
  );
};
