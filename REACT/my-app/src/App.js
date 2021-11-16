import "./App.css";
import { Component } from "react";
import Person from "./Component/Person";

class App extends Component {
  state = {
    person: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  };

  onClickHandler = (myName) => {
    this.setState({
      person: [
        { name: myName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 20 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is realy working!</p>
        <button
          // onClick={this.onClickHandler}
          onClick={() => this.onClickHandler("John!!")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.onClickHandler.bind(this, "Max!")}
        >
          My Hobbeis: Dancing
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;
