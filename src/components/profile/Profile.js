import PropTypes from "prop-types";

const Profile = ({ avatar, name, tag, location, statistics }) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={name} class="avatar" />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity"> {statistics.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity"> {statistics.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity"> {statistics.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  statistics: PropTypes.object,
};

export default Profile;