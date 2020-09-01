import React from 'react';
import './Todo.css';



function todoList(props){ 

    return (
        <div className='toDoList'>
            <div className={props.todo.completed ? 'completed' : null}
                style={{ textDecoration: props.todo.completed ? 'line-through' : '' }}
                onClick={e => props.togglecompletd(props.todo.id)}>
                {props.todo.task}</div>
        </div>
    );
};

export default todoList;