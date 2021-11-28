import PropTypes from "prop-types";
import styles from "./ProfileStats.module.scss";

const ProfileStats = ({ statistics }) => {
  const keys = Object.keys(statistics);
  return (
    <ul className={styles.stats}>
      {keys.map((keyStat) => (
        <li key={keyStat} className={styles.item}>
          <span className={styles.label}>{keyStat}</span>
          <span className={styles.quantity}> {statistics[keyStat]}</span>
        </li>
      ))}
    </ul>
  );
};

ProfileStats.defaultProps = {
  statistics: {},
}

ProfileStats.propTypes = {
  statistics: PropTypes.object,
};

export default ProfileStats;
