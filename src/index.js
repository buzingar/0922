console.log("OOK!");

// 1. 导入
import React from "react"; // 创建组件、虚拟DOM元素、生命周期
import ReactDOM from "react-dom"; // 放到页面展示

// 2. 创建虚拟DOM元素
/* 参数1：创建的元素类型，字符串，表示元素的名称
  参数2：是一个对象或null，表示当前这个dom元素的属性
  参数3：子节点（包括其他虚拟DOM 获取 文本子节点） 
  参数n：其他子节点
*/
// const myh1 = React.createElement(
//   "h1",
//   { id: "myh1", title: "this is a h1" },
//   "这是一个大大的H1"
// );

// const mydiv = React.createElement("div", null, "this is a div", myh1);

// JSX语法，符合XML规范的js，本质：在运行时被babel转换成上述方式执行
// const mydiv = (
//   <div id="mydiv" title="div element">
//     this is a div
//   </div>
// );

let a = 10;

// 3. 使用ReactDOM把虚拟DOM渲染到页面上
// 参数1：要渲染的虚拟DOM元素
// 参数2：指定页面上一个容器，接口一个dom元素
ReactDOM.render(<div>{a + 2}</div>, document.getElementById("app"));
