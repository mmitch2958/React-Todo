import React from 'react';


import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const todoData = [
  
  { task: 'Return your express Jacket', id: 4, completed: false, textDecoration: "none" },
  { task: 'Go to the Gym', id: 7, completed: false, textDecoration: "none" },
  { task: 'Watch New Gerard Buttler Movie', id: 8, completed: false, textDecoration: "none" }

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
    console.log('its working!');
    return (
      <div classname='body'>
        <div classname='App'>
          <h1 classname='header'>Your TODO List:</h1>
          <TodoList togComp={this.togComp}
            todos={this.state.todos}
          />
          <TodoForm
            saveList={this.saveList}
            addNewItem={this.addNewItem}
            handleChanges={this.handleChanges}
            todo={this.state.todo}
          />
                  
        </div>
        
      </div>
    );
  }
}

export default App; 


