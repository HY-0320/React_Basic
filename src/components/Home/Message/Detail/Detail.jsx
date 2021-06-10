import React, { Component } from "react";

const detailData = [{id:'01',content:"黄越"},{id:'02',content:"5120186065"},{id:'03',content:"西南科技大学"}]
export default class Detail extends Component {
  render() {
    console.log(this.props)
    const {id,title} = this.props.match.params
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{detailData.find(item => item.id === id).content}</li>
      </ul>
    );
  }
}
