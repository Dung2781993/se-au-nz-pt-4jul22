import './App.css';
import moment from 'moment-timezone';

function App() {
  let formatName = (user) => {
    return user.firstName + ' ' + user.lastName;
  }

  const user =  {
    firstName: "Hello",
    lastName: "World",
  }

  const element = (
    <h1> Hello, {formatName(user)}</h1>
  )

  return (
    <div className="App">
      <header className="App-header">
        {element}
      </header>
    </div>
  );
}

export default App;
