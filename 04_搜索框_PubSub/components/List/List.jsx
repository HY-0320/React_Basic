import React, { Component } from "react";
import PubSub from 'pubsub-js'

export default class List extends Component {
    //初始化状态
    state = { userList: [], isLoading: false, isFirst: true, err: '' }
    componentDidMount(){
      this.updateState = PubSub.subscribe('updateState',(msg,data)=>{
        this.setState(data)
      })
    }
    componentWillUnmount(){
      PubSub.unsubscribe(this.updateState)
    }
  render() {
    const { userList,isFirst,isLoading,err} = this.state;
    return (
      //利用三元表达式代替if
      isFirst? <h1>请输入名字检索</h1> :
      isLoading? <h1> Loading.... </h1>:
      err?<h1>{err}</h1>:
      <div className="row">
        {userList.map((user) => {
          return (
            <div key={user.id} className="card">
              <a
                href={user.html_url}
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={user.avatar_url}
                  alt="head"
                  style={{ width: "100px" }}
                />
              </a>
              <p className="card-text">{user.login}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
