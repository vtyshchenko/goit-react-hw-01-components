import Profile from "./components/profile/Profile";
import Statistics from "./components/statistics/Statistics";

import user from "./data/user.json";
import data from "./data/data.json";

function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        statistics={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;