import React from 'react';
import './Todo.css'
import todoNote from './Todo'

function todoList(props) {
    return (
        <div className='listContainer'>
            {props.todos.map(todo => {
                return <todoNote
                    todo={todo}
                    key={todo.id}
                    toggleCompleted={props.toggleCompleted} />;
            
            })}
        </div>
    );
}
export default todoList; 
