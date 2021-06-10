import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'



export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '学习java', flag: false },
      { id: '002', name: '学习javascript', flag: true },
      { id: '003', name: '学习通信原理', flag: false },
      { id: '004', name: '学习c++', flag: true },
      { id: '005', name: '学习python', flag: true }
    ]
  }
  //新增任务
  getAddData = (object) => {
    const { todos } = this.state;
    let newTodos = [object, ...todos]
    this.setState({ todos: newTodos })

  }
  //删除任务
  deteleData = (id) => {
    if (!window.confirm('确定删除吗？')) {
      return
    }
    const { todos } = this.state;
    let newTodos = todos.filter(todo => todo.id !== id)
    this.setState({ todos: newTodos })
  }
  //更新任务状态
  updateData = (id,flag) => {
    const {todos} =this.state;
    let newTodos = todos.map(todo=>{
      if(todo.id === id)
      {
        return {...todo,flag}
      }else{
        return todo
      }

    })
    this.setState({todos:newTodos})

  }
  //清除全部选择的任务
  clearAll = ()=>{
    const { todos } = this.state;
    let newTodos = todos.filter(todo => !todo.flag)
    this.setState({todos:newTodos})
  }
  //全选和全不选
  checkAll = (flag)=>{
    const {todos} = this.state;
    let newTodos = todos.map(todo =>{
        return {...todo,flag}
    })
    this.setState({todos:newTodos})
  }



  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header getAddData={this.getAddData} />
          <List todos={todos} deteleData={this.deteleData} updateData={this.updateData} />
          <Footer todos={todos} clearAll={this.clearAll} checkAll={this.checkAll} />
        </div>
      </div>
    )
  }
}