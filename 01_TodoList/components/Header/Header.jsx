import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./Header.css";

export default class Header extends Component {
  keyHandel = (event) => {
    let { getAddData } = this.props;
    let { target, keyCode } = event;
    //阻止空格输入
    if (keyCode === 32) {
      target.value = target.value.trim();
      alert("请别输入空格");
      return;
    }
    //阻止输入空白
    if (target.value === "") {
      alert("输入任务不能为空");
      return;
    }
    //判断是否是回车
    if (keyCode !== 13) {
      return;
    }
    //给APP传值
    let temp = {id:nanoid(),name:target.value,flag:false}
    getAddData(temp);
    //清空
    target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.keyHandel}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
