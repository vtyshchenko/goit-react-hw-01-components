import { clearConfigCache } from "prettier";
import PropTypes from "prop-types";

import styles from "./StatisticsItem.module.scss";

const StatisticsItem = ({ stats }) => {
  return (
    <ul className={styles.list}>
      {stats.map((statInfo) => (
        <li
          key={statInfo.id}
          className={styles.item}
          style={{
            backgroundColor: getRGB(),
            width: `calc(100%/${stats.length})`,
          }}
        >
          <span className={styles.label}>{statInfo.label}</span>
          <span className={styles.percentage}>{statInfo.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsItem.defaultProps = {
  stats: [],
};

StatisticsItem.propTypes = {
  stats: PropTypes.array.isRequired,
};

function getRGB() {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

export default StatisticsItem;
