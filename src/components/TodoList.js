import React from 'react';
import TodoNote from './Todo'

function TodoList(props) {
    return (
        <div className='todoList'>
            {props.todos.map(todo => {
                return <TodoNote
                    todo={todo}
                    key={todo.id}
                    togComp={props.togComp} />;
            
            })}
        </div>
    );
}
export default TodoList; 
