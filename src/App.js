import React from 'react';
import './App.css';

import todoForm from './components/TodoForm'
import todoList from './components/TodoList'

const todoData = [
  


]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
      todo: ''
    };
}

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewToDo = ev => {
    ev.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.todo,
          id: Date.now(),
          completed: false, textDecoration: 'none'
        }
      ],
      todo: ''
    });
    this.saveList();
  };

  saveList = ev => {
    const todo = this.state.todo
    localStorage.setItem('todo', todo);

  }

  togComp = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
         
          return {
            ...todo,
            completd: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
