import React, { Component } from "react";

class World extends Component {
  constructor() {
    // 构造器，new类时优先执行构造器中的代码
    // 必须优先调用super()，调用父类构造器
    super();
  }

  render() {
    return <div>World</div>;
  }
}
