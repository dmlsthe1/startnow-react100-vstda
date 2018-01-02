import React from "react";

export class Form extends React.Component {
 
  render() {

    let todoTextTest = "create-todo-text";
    let priorityValue = this.props.priority == 1 ? "success" : this.props.priority == 2 ? "warning" : this.props.priority == 3 ? "danger" : "";
    let priorityAlert = `alert-${priorityValue}`;
    let propsHandleChange = this.props.handleChange;
    let title = "I want to..";
    let editButton =  <div className="card-footer">
                        <button className="btn btn-success btn-block"
                                id="addTodo"
                                onClick={this.props.handleClickAdd}
                                type="button"
                        >
                          Add Todo Item
                        </button>
                      </div>;
    let editColumn = "";
    let editPriority = "How much of a priority is this?";
    let form = "form";

    if (this.props.edit) {
      todoTextTest = "update-todo-text";
      title = "Description";
      form = "editForm";
      editColumn = "col-6";
      editPriority = "Priority";
      propsHandleChange = this.props.handleChangeEdit;
      editButton = (<div className="container">
                      <div className="row">
                        <button onClick={this.props.handleClickUpdate} type="button" id={this.props.id} className="btn btn-success mr-3 mb-3 ml-auto update-todo">
                          Save
                        </button>
                      </div>
                    </div>);
     }

    return (
      
        <form id={form} className={priorityAlert}>
          <div className="form-group px-3">
            <label htmlFor="todoText"><strong>{title}</strong></label>
            <textarea id="todoText"
                      defaultValue={this.props.text}
                      onChange={propsHandleChange}
                      type="textarea" 
                      className={`form-control ${todoTextTest}`}
                      >
            </textarea>
          </div>
          <div className={`form-group px-3 ${editColumn}`}>
            <label htmlFor="todoPriority"><strong>{editPriority}</strong></label>
            <select id="todoPriority"
                    onChange={propsHandleChange} 
                    defaultValue={this.props.priority}
                    name="todoPriority" type="number"
                    className="form-control create-todo-priority"
                    >
              <option value="0" hidden>Select a Priority</option>
              <option value="1">Low Priority</option>
              <option value="2">Medium Priority</option>
              <option value="3">High Priority</option>
            </select>
          </div>
          {editButton}

        </form>

    );
  }
}