import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem.js";

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
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