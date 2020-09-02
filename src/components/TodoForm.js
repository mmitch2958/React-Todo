import React from 'react';
import './Todo.css'


function TodoForm(props) {
console.log(props.todo)
    return (
        <form>
            <input
                value={props.target.value}
                type='text'
                name='todo'
                placeholder='Please add Item to list'
                onChange={props.handelChanges}
            />
            <div className='buttons'>
                <button onClick={props.addNewItem()}>Add Item To List</button>
                <button onClick={props.clearCompleted}> Clear List </button>
            </div>

        </form>
    );
} 
export default TodoForm;