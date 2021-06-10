import React, { Component } from "react";

export default class List extends Component {
  render() {
    const { userList,isFirst,isLoading,err} = this.props;
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
