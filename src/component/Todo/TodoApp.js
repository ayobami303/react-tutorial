import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class TodoApp extends React.Component {
	state = {
		todos: [
			{ content: 'go home early.', id: 1},
			{ content: 'get some food', id: 2},
			{ content: 'play uncharted', id: 3},
		]
	}

	deleteTodo = (id) => {
		const todos = this.state.todos.filter(todo => {
			return todo.id !== id
		});

		this.setState({ todos: todos });
	}

	addTodo = (todo) => {
		const todos = [...this.state.todos, { ...todo, id: Math.random() }];
		this.setState({ todos: todos });
	}

	render(){
		return (
			<div className='todo-app container'>
				<h1 className='center-align blue-text'>Todo's</h1>
				<Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
				<AddTodo addTodo={this.addTodo} />
			</div>
		)
	}
}

export default TodoApp;
