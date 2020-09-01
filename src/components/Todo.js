import React from 'react';
import './Todo.css';



function TodoNote(props){ 

    return (
        <div className='todoList'>
            <div className={props.todo.completed ? 'completed' : null}
                style={{ textDecoration: props.todo.completed ? 'line-through' : '' }}
                onClick={e => props.togcomp(props.todo.id)}>
                {props.todo.task}</div>
        </div>
    );
};

export default TodoNote;