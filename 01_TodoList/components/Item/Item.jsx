import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  //鼠标移入和移除状态
  state = {
    mouse: false,
  };
  //鼠标日入和移除改变状态
  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };
  //删除
  handleDetele = (id) => {
    return () => {
      this.props.deteleData(id);
    };
  };
  //选择
  handleChecked = (e,id) => {
    this.props.updateData(id,e.target.checked)
  };
  render() {
    const { id, name, flag } = this.props;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: this.state.mouse ? "#ddd" : "#fff" }}
      >
        <label>
          <input
            type="checkbox"
            checked={flag}
            onChange={(e)=>{this.handleChecked(e,id)}}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          onClick={this.handleDetele(id)}
          style={{ display: this.state.mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
