import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem.js";

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map((statInfo) => (
          <StatisticsItem
            key={statInfo.id}
            title={statInfo.label}
            stats={statInfo.percentage}
          />
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