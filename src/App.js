import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
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

  delTodo = (id)=>{
    console.log("id", id);
    this.setState({
      todos:[...this.state.todos.filter(
       todo => todo.id !== id)
      ]}
    );
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }

}


export default App;
