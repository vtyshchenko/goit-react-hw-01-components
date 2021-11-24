import Profile from "./components/profile/Profile";
import data from "./data/user.json";

function App() {
  return (
    <div>
      <Profile
        avatar={data.avatar}
        name={data.username}
        tag={data.tag}
        location={data.location}
      />
    </div>
  );
}

export default App;
