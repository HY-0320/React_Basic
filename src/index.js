//引入react核心库
import React from 'react';
//引入reactROM库
import ReactDOM from 'react-dom';
//引入App组件
import App from './App';
//全局引入aioxs
import axios from 'axios'
//引入api
import * as api from './Api/api'
//引入路由
import { BrowserRouter } from 'react-router-dom';

React.Component.prototype.axios = axios
React.Component.prototype.api = api

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
