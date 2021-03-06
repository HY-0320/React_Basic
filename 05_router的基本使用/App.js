import React, { Component } from 'react'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import About from './components/About/About'
import Home from './components/Home/Home'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <Link className="list-group-item" to="/about">About</Link>
            <Link className="list-group-item" to="/home">Home</Link> */}
              {/* NavLink可以实现路由链接的高亮，通过activeClassnclassNameName指定样式名 */}
              <NavLink className="list-group-item" to="/about">About</NavLink>
              <NavLink className="list-group-item" to="/home">Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  {/* 重定向 无法匹配时默认路径 */}
                  <Redirect to='/about'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}