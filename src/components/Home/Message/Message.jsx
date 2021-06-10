import React, { Component } from "react";
import { Link,Route,Switch } from 'react-router-dom';
import Detail from './Detail/Detail'

export default class Message extends Component {
  state = {
    messageArry : [
      {
        id:'01',
        title:"message01"
      },
      {
        id:'02',
        title:"message02"
      },
      {
        id:'03',
        title:"message03"
      }
    ]
  }
  render() {
    const {messageArry} = this.state
    return (
      <div>
        <ul>
          {
            messageArry.map(item =>{
              return (
              <li key={item.id}>
                <Link to = {`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
              </li>)
            } )
          }
        </ul>
        <hr/>
        <Switch>
          <Route path="/home/message/detail/:id/:title" component={Detail}></Route>
        </Switch>
      </div>
    );
  }
}
