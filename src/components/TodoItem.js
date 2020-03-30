import React, { Component } from 'react'

export class TodoItem extends Component {
    render() {
        const {todo} = this.props;
        return (
            <p>
                {todo.title}
            </p>
        )
    }
}

export default TodoItem
