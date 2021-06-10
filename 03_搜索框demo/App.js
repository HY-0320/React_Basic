import React, { Component } from 'react'
import Search from './components/Search/Search'
import List from './components/List/List'
import './App.css'


export default class App extends Component {
  //初始化状态
  state = { userList: [], isLoading: false, isFirst: true, err: '' }
  //更新状态信息
  updateState = (stateObj) => {
    this.setState(stateObj);
  }
  render() {
    return (
      <div className="container">
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}