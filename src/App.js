import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import {v4} from 'uuid';
// import { render } from '@testing-library/react';

class App extends Component {

  state = {
    todos: [
      {
        id: v4(),
        title: 'first thing to do',
        completed: true
      },
      {
        id: v4(),
        title: 'second thing to do',
        completed: false
      },
      {
        id: v4(),
        title: 'third thing to do',
        completed: false
      },
    ]
  };

  //Togle Completed
  markComplete = (id) => {
    // console.log("id", id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  delTodo = (id) => {
    console.log("id", id);
    this.setState({
      todos: [...this.state.todos.filter(
        todo => todo.id !== id)
      ]
    }
    );
  }

  addTodo = (title)=>{
    const newTodo = {
      id:v4(),
      title,
      completed:false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>

      </div>
    );
  }

}


export default App;
