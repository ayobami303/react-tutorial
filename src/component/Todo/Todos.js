import React from "react";

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => (
            <div className='collection-item' key={todo.id}>
                <span onClick = {() => deleteTodo(todo.id)}>{todo.content}</span>
            </div>
        ))
    ) : (
        <p className='center-align'>You have no Todo's left. yay!</p>
    )
    return(
        <div className='collection todo'>
            {todoList}
        </div>
    )
}

export default Todos;