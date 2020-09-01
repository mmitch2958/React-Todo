import React from 'react';
import './Todo.css'


function TodoForm(props) {

    return (
        <form>
            <input
                value={props.todo}
                type='text'
                name='Todo List'
                placeholder='Please add Item to list'
                onChange={props.handelChanges}
            />
            <div className='buttons'>
                <button onClick={props.addNewItem}>Add Item To List</button>
                <button onClick={props.clearCompleted}> Clear List </button>
            </div>

        </form>
    );
} 
export default TodoForm;