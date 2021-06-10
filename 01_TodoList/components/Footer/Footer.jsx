import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  handleClearAllFilish = () => {
    this.props.clearAll();
  };
  handleCheckAll =() =>{
    return (e)=>{
      this.props.checkAll(e.target.checked)
    }
  }
  render() {
    let { todos } = this.props;
    let totalNumber = todos.length;
    let filishNumeber = todos.reduce((pre, todo) => (todo.flag ? pre + 1 : pre + 0),0);
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={totalNumber === filishNumeber && totalNumber !== 0 ? true : false} onChange={this.handleCheckAll()}/>
        </label>
        <span>
          <span>已完成{filishNumeber}</span> / 全部{totalNumber}
        </span>
        <button onClick={this.handleClearAllFilish} className="btn btn-danger">
          清除已完成任务
        </button>
      </div>
    );
  }
}
