import React from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const todos = [
  {
    task: "",
    id: "",
    completd: false,
  },

  // { task: 'Return your express Jacket', id: 4, completed: false, textDecoration: "none" },
  // { task: 'Go to the Gym', id: 7, completed: false, textDecoration: "none" },
  // { task: 'Watch New Gerard Buttler Movie', id: 8, completed: false, textDecoration: "none" }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos,
      // todo: ''
    };
  }

  addNewToDo = (taskName) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: taskName,
          id: Date.now(),
          completed: false,
        },
      ],
    });
  };

  saveList = (ev) => {
    const todo = this.state.todo;
    localStorage.setItem("todo", todo);
  };

  togComp = (id) => {
    let todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todos;
    });
  };

  // clearCompleted = () => {

  //   this.setState( this.state.todos => {
  //     return {
  //       todos: this.state.todos.filter(todo => {
  //         return !todo.completed;
  //       })
  //     }
  //   })
  // }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("its working!");
    return (
      <div className="body">
        <div className="App">
          <h1 className="header">Your TODO List:</h1>

          <TodoForm addNewToDo={this.addNewToDo} />
          <TodoList togComp={this.togComp} todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
