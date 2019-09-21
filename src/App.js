import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state={
    todos:[
      {id:0, content:'Buy milk'},
      {id:1, content:'Go to Park Street'},
      {id:2, content:'Play Maria Kart'}
    ]
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos:todos
    })
  }
  addTodo=(todo)=>{
    todo.id=Math.random();
    let todos=[...this.state.todos,todo];
    this.setState({
      todos:todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">To Do's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
  
}
export default App;