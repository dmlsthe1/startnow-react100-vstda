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
    this.handleChangeEdit = this.handleChangeEdit.bind(this);
    this.handleClickUpdate = this.handleClickUpdate.bind(this);
  }

  handleChangeEdit(e){
    let value = e.target.value;
    let name = "edit" + e.target.id;
    this.setState({
      [name]: value
    })
  }

  handleClickUpdate(e){

    let id = e.target.id;
    let text = this.state.edittodoText;
    let priority = this.state.edittodoPriority;
    let todo = this.state.todo;
    let index;

    if(text.length < 3 || priority === 0) {
      return alert("Please enter a todo item with more than 2 characters AND select a priority level");
    }
    
    for(let i = 0; i < todo.length; i++){
      if (todo[i].props.id == id){
        index = i;
      }
    }

    let todoItem = todo[index];
    let newTodo = (<Todo key={todoItem.props.id}
                    id={todoItem.props.id}
                    handleClickEdit={this.handleClickEdit}
                    handleClickDelete={this.handleClickDelete}
                    priority={priority}
                    text={text}
                    />);
    
    todo.splice(index, 1, newTodo);

    this.setState({
      todo,
    })
  }

  handleChange(e){
    let value = e.target.value;
    let name = e.target.id;
    this.setState({
      [name]: value
    })
  }

  handleClickEdit(e){
    let data = e.target.dataset.value;
    let todo = this.state.todo;
    let index;

    for(let i = 0; i < todo.length; i++){
      if (todo[i].props.id == data){
        index = i;
      }
    }

    let todoItem = todo[index];
    let edittodoPriority = todoItem.props.priority;
    let edittodoText = todoItem.props.text;
    let form =  <Form key={todoItem.props.id}
                      id={todoItem.props.id}
                      handleChange={this.handleChangeEdit}
                      handleClickAdd={this.handleClickAdd}
                      priority={edittodoPriority}
                      text={edittodoText}
                      edit={true}
                      handleClickUpdate={this.handleClickUpdate}
                      handleChangeEdit={this.handleChangeEdit}
                />
    todo.splice(index, 1, form);
    
    this.setState({
      edittodoPriority,
      edittodoText,
      todo,
    })
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

    todo.push(<Todo key={counter}
                    id={counter}
                    handleClickEdit={this.handleClickEdit}
                    handleClickDelete={this.handleClickDelete}
                    priority={priority}
                    text={text}
                    />);
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

                <Form handleChange={this.handleChange}
                      priority={this.state.todoPriority}
                      editPriority={this.state.edittodoPriority}
                      editText={this.state.edittodoText}
                      text={this.state.todoText}
                      handleClickAdd={this.handleClickAdd}
                />

            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-light">View Todos</div>
              <ul className="list-group">
                
                {this.state.todo}

              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
