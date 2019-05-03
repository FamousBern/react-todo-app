import React, { Component } from "react";
import TodoItem from "./todoitem";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      item: ""
    };
  }

  handlechange = e => {
    const input = e.target.value;
    this.setState({
      item: input
    });
  };

  handleonclick = () => {
    let todocopy = this.state.todos.slice();
    todocopy.push(this.state.item);
    this.setState({
      todos: todocopy,
      item: ""
    });
  };

  hanndleDelete = i => {
    let todocopy = this.state.todos.slice();
    todocopy.splice(i, 1);
    this.setState({
      todos: todocopy
    });
  };

  myInfo = () => {
    alert(
      "Hello, My name is bern and am a software engineer who likes creating solutions to problems in computer world, you can contact me via my email bernardberbell@gmail.com for more info."
    );
    return false;
  };

  render() {
    const tasks = this.state.todos.map((todo, i) => {
      return (
        <TodoItem key={i} task={todo} delete={() => this.hanndleDelete(i)} />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>REACT TODO APP</h1>
          <h2>Created by: BernCode - Inc &copy; 2019</h2>
          <button onClick={this.myInfo} className="con">
            contact me
          </button>
        </header>
        <div className="todoApp">
          <input
            type="text"
            className="form-control"
            onChange={this.handlechange}
            value={this.state.item}
            placeholder="Add your task"
          />
          <button onClick={this.handleonclick} className="btn">
            +
          </button>
        </div>
        <div className="tasks">
          {this.state.todos.length === 0 ? (
            "You ain't have tasks yet add them."
          ) : (
            <ul>{tasks}</ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
