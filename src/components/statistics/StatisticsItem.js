import PropTypes from "prop-types";

const StatisticsItem = ({ title, stats }) => {
  return (
    <li class="item">
      <span class="label">{title}</span>
      <span class="percentage">{stats}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default StatisticsItem;
