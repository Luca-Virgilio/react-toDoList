import React, { Component } from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {
  markComplete = () => {
    console.log("todo");
  }

  render() {
    const { todos } = this.props;
    return (todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
    ))
    )
  }
}

// Proptypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
