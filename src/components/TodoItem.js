import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle= ()=>{
        return { 
            textDecoration: (this.props.todo.completed)? 'line-through' : 'none',
            backgroundColor: '#f4f4f4',
            padding:'10px',
            borderBottom: '1px #ccc dotted'
        }
    }
    markComplete = (e)=>{
        console.log(this.props);
    }
    
    render() {
        const {todo} = this.props;
        const {id, title} = todo;
        return (
            // <div style={{backgroundColor:'#f4f4f4'}}> style into div
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                </p>
            </div>
        )
    }
}

// Proptypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default TodoItem
