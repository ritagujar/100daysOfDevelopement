import "./App.css";
import { Component } from "react";
import Person from "./Component/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is realy working!</p>
        <Person name="Max" age="28" />
        <Person name="Manu" age="29">
          My Hobbeis: Dancing
        </Person>
        <Person name="Stephanie" age="20" />
      </div>
    );
  }
}

export default App;
