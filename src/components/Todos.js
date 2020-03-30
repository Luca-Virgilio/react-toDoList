import React, { Component } from 'react'
import TodoItem from './TodoItem';

export class Todos extends Component {
    render() {
        const {todos} = this.props;
        return ( todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo}/>
        ))
        )
    }
}

export default Todos;
