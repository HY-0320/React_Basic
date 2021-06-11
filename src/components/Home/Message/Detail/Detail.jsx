import React, { Component } from "react";
// import qs from 'querystring'

const detailData = [{id:'01',content:"黄越"},{id:'02',content:"5120186065"},{id:'03',content:"西南科技大学"}]
export default class Detail extends Component {
  render() {
    console.log(this.props)

    // 接收parmas参数
    // const {id,title} = this.props.match.params

    //接收search参数 需要借助querystring
    // const {search} = this.props.location;
    // const {id,title} = qs.parse(search.slice(1))

    //接收state参数
    const {id,title} = this.props.location.state
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{detailData.find(item => item.id === id).content}</li>
      </ul>
    );
  }
}
