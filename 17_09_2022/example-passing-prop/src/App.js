import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  const cheer = {
    url: "https://i.imgur.com/Vw2LqmJ.png",
    alt: "cheer",
    width: 100,
    height: 100,
  };
  const listAvatar = [
    {
      url: "https://i.imgur.com/Vw2LqmJ.png",
      alt: "cheer",
      width: 100,
      height: 100,
    },
    {
      url: "https://i.imgur.com/qz5maDR.png",
      alt: "Trump",
      width: 100,
      height: 100,
    },
    {
      url: "https://i.imgur.com/4wmyNEs.jpeg",
      alt: "Biden",
      width: 100,
      height: 100,
    },
  ];

  const age = 100;

  const myFunction = (a, b) => {
    return a + b;
  };

  const showName = (name) => {
    return <div>{name}</div>;
  };

  return (
    <div className="App">
      <Avatar
        value={cheer}
        age={age}
        listAvatar={listAvatar}
        function={myFunction}
        component={showName}
      />
    </div>
  );
}

export default App;
