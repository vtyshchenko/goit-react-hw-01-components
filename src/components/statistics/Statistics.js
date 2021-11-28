import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem.js";
import styles from './Statistics.module.scss';

const Statistics = ({ title, stats }) => {

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <StatisticsItem stats={stats}/>

    </section>
  );
};

Statistics.defaultProps = {
  title: "",
  stats: [],
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;