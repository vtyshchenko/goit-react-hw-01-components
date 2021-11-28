import PropTypes from "prop-types";
import styles from './Profile.module.scss';
import ProfileStats from './ProfileStats';

const Profile = ({ avatar, name, tag, location, statistics }) => {
  return (
    <section className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ProfileStats statistics={statistics}/>

    </section>
  );
};

Profile.defaultProps = {
  name: "no name",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  tag: 'no tag',
  location: 'no location',
}

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  statistics: PropTypes.object,
};

export default Profile;
