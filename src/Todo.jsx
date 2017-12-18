import React from "react";

export class Todo extends React.Component {

  
  
  render(){

    let priorityValue = this.props.priority == 1 ? "success" : this.props.priority == 2 ? "warning" : this.props.priority == 3 ? "danger" : "";

    return (
      <li className={`list-group-item list-group-item-${priorityValue}`}>
        <div className="row">
          <input className="col-1 my-1 m-0" type="checkbox"/>
          <p className="col-9 p-0 m-0">{this.props.text}</p>
          <i onClick={this.props.handleClickEdit} id="editTodo" data-value={this.props.id} className="col-1 fas fa-edit text-primary edit-todo" aria-hidden="true"></i>
          <i onClick={this.props.handleClickDelete} id="deleteTodo" data-value={this.props.id} className="col-1 fas fa-trash-alt text-danger delete-todo" aria-hidden="true"></i>
        </div>
      </li>
    );
  }
}