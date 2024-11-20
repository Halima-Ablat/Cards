import Profile from "./Profile";
import profile from "./assets/background.jpg.avif";
import burger from "./assets/cheeseburger.png";

function App() {
  return (
    <>
      <div className="profile-container">
        <Profile
          image={profile}
          title="React Code"
          text="My first react profile"
        />
        <Profile
          image={burger}
          title="Second Code"
          text="My second react profile"
        />
        <Profile
          image={profile}
          title="Third Code"
          text="My third react profile"
        />
        <Profile
          image={burger}
          title="Fourth Code"
          text="My fourth react profile"
        />
      </div>
    </>
  );
}

export default App;
