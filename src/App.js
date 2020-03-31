import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
// import { render } from '@testing-library/react';

class App extends Component{

  state = {
    todos: [
      {
        id: 1,
        title: 'first thing to do',
        completed: true
      },
      {
        id: 2,
        title: 'second thing to do',
        completed: false
      },
      {
        id: 3,
        title: 'third thing to do',
        completed: false
      },
    ]
  };

  //Togle Completed
  markComplete = (id)=>{
    // console.log("id", id);
    this.setState({todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
    })});
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo list</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }

}


export default App;
