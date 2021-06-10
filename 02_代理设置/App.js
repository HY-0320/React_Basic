import React, { Component } from 'react'
export default class App extends Component {
  handleStudentClick = () =>{
    // this.axios.get('http://localhost:5000/students').then(
    //   response =>{
    //     console.log('成功了',response)
    //   },
    //   error =>{
    //     console.log('失败了',error)
    //   }
    // )
    this.api.getStudentInfo();
  }
  handleCarClick = () =>{
    this.api.getCarInfo();
  }
  render() {
    return (
      <div >
        <button onClick={this.handleStudentClick}>点击获取学生信息</button>
        <button onClick={this.handleCarClick}>点击获取学生信息</button>
      </div>
    )
  }
}