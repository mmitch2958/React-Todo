import React from 'react';
import './Todo.css'


class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            newTaskName: ''
        }
    }
    handleChanges = e => {
        e.preventDefault()
        this.setState({
            newTaskName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTaskName)
        this.setState({
            newTaskName:""
        })
    }

    render() {
        return(
        <form onSubmit={this.handleSubmit}>
            <input
                value={this.state.newTaskName}
                type='text'
                name='todo'
                placeholder='Please add Item to list'
                onChange={this.handelChanges}
            />
            <div className='buttons'>
                <button>Add Item To List</button>
            </div>
        </form>
        )
    }
}

export default TodoForm;