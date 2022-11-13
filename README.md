<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-07-04 19:37:34
 * @LastEditors: 王远昭
 * @LastEditTime: 2022-11-13 23:59:00
-->

## Vercel在线预览

[https://blog-hair-collected.vercel.app/](https://blog-hair-collected.vercel.app/)

注：Vercel国内被墙了，国内目前访问不了

## 掉发收集站开发记录

### 日志

#### 2022年11月9日19点07分

1. 设置一个文字气泡效果遇到的问题：

   > 创建子节点并删除该节点
   >
   > **解决**：原实现效果采用JQuery的animate方法，原生的animate不支持回调函数。最后使用setTimeOut函数在特定时间删除相应节点。
   >
   > 原生animate的使用：https://developer.mozilla.org/zh-CN/docs/Web/API/Element/animate
   >
   > 各种有趣文字效果：https://www.creativosonline.org/zh-TW/CSS%E6%96%87%E5%AD%97%E6%95%88%E6%9E%9C.html

2. 原生DOM（不知道是不是叫虚拟DOM）的子节点创建和删除

   > 创建（自带模板）：https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
   >
   > 删除：https://developer.mozilla.org/zh-CN/docs/Web/API/Node/removeChild
   >
   > 两者操作的对象都是Node（既HTML元素）

2. npm引入字体

   > https://github.com/chawyehsu/lxgw-wenkai-webfont
   >
   > 遇到问题：需要在特定组件中以JS/TS导入，并在作用域css中import

#### 2022年11月10日10点31分

1. CSS中animation 中的函数

   > steps函数:  https://github.com/VenenoFSD/Blog/issues/36


