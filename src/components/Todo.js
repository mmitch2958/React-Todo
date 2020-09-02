import React from 'react';




function TodoNote(props){ 

    return (
        <div className='todoList'>
            <div
                className={props.todo.completed ? 'completed' : null}
                style={{ textDecoration: props.todo.completed ? 'line-through' : '' }}
                onClick={event => props.togComp(props.todo.id)}>
                {props.todo.task}</div>
        </div>
    );
};

export default TodoNote;