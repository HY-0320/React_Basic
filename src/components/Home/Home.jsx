import React, { Component } from 'react'
import { NavLink,Redirect,Route,Switch } from 'react-router-dom';
import Message from './Message/Message'
import News from './News/News'

export default class Home extends Component {
    render() {
        return (
            <div>
            <h2>Home组件内容</h2>
            <div>
              <ul className="nav nav-tabs">
                <li>
                  <NavLink className="list-group-item" to='/home/news'>News</NavLink>
                </li>
                <li>
                  <NavLink className="list-group-item " to='/home/message'>Message</NavLink>
                </li>
              </ul>
              <div>
                  <Switch>
                  <Route path="/home/news" component={News}></Route>
                  <Route path="/home/message" component={Message}></Route>
                  <Redirect to="/home/news"/>
                  </Switch>
                    
              </div>
            </div>
          </div>
        )
    }
}
