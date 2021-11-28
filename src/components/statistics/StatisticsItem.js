import PropTypes from "prop-types";

const StatisticsItem = ({ title, stats }) => {
  return (
    <li className="item">
      <span className="label">{title}</span>
      <span className="percentage">{stats}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default StatisticsItem;
