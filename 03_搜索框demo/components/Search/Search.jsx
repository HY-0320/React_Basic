import React, { Component } from "react";

export default class Search extends Component {
  handleSearch = () => {
    //连续解构赋值重命名
    const {keyInput: { value: keyWord }} = this;
    //更新状态显示loading
    this.props.updateState({isLoading:true,isFirst:false})
    //调用api接口
    this.api.getUsers(keyWord).then(res => {
      //获取到用户信息更新状态
      const stateObj = {userList: res, isLoading: false}
       this.props.updateState(stateObj)
    },
    error =>{
      //调用接口失败打印错误 更新状态
      const stateObj = {isLoading: false,err: error.message}
      this.props.updateState(stateObj)
    })

  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => {
              this.keyInput = c;
            }}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    );
  }
}
