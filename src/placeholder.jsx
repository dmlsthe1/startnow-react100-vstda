import React, { Component } from 'react';
import {Todo} from "./Todo.jsx";
import {Form} from "./Form.jsx";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      todoText: "",
      todoPriority: 0,
      todo: [],
      counter: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleChange(e){
    let value = e.target.value;
    let name = e.target.id;
    (name === "todoPriority") && (value = value == 1 ? "list-group-item list-group-item-success" : value == 2 ? "list-group-item list-group-item-warning" : "list-group-item list-group-item-danger");
    this.setState({
      [name]: value
    })
  }

  handleClickEdit(e){
    let data = e.target.dataset.value;
    let todo = this.state.todo;
    let index;
    console.log(todo)
    for(let i = 0; i < todo.length; i++){
      if (todo[i].props.id == data){
        index = i;
      }
    }

    let todoItem = todo[index];
    let form = <Form key={todoItem.id} id={todoItem.id} handleChange={this.handleChange} priority={todoItem.priority} text={todoItem.text} />
    todo.splice(index, 1, form);
  }

  handleClickDelete(e){
    let data = e.target.dataset.value;
    let index;
    let todo = this.state.todo;

    for(let i = 0; i < todo.length; i++){
      if (todo[i].props.id == data){
        index = i;
        break;
      }
    }
    
    todo.splice(index, 1);

    this.setState({
      todo,
    })
  }

  handleClickAdd(e){
    
    let text = this.state.todoText;
    let priority = this.state.todoPriority;
    let todo = this.state.todo;
    let counter = this.state.counter;

    if(text.length < 3 || priority === 0) {
      return alert("Please enter a todo item with more than 2 characters AND select a priority level");
    }

    todo.push({
      id: counter,
      priority,
      text
    });
    counter++;
    
    this.setState({
      todoText: "",
      todoPriority: 0,
      todo,
      counter,
    })
    document.getElementById("form").reset();
  }

  render() {

    return (
      <div className='container'>
        <header className="h1 text-white">Very Simple Todo App</header>
        <p className="text-white">Track all of the things</p>
        <hr className="bg-white" />
        <div className="row">
          
          <div className="col-md-4">
            <div className="card">
              <div className="card-header bg-light">Add New Todo</div>

                <Form handleChange={this.handleChange} priority={this.state.todoPriority} text={this.state.todoText} />

              <div className="card-footer bg-light">
                <button className="btn btn-success btn-block" id="addTodo" onClick={this.handleClickAdd} type="button">Add Todo Item</button>
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-light">View Todos</div>
              <ul className="list-group">
                
                {this.state.todo.map(todoItem => (
                  <Todo key={todoItem.id} id={todoItem.id} handleClickEdit={this.handleClickEdit} handleClickDelete={this.handleClickDelete} priority={todoItem.priority} text={todoItem.text} />
                ))}

              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
