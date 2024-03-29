<!--
 * @Descripttion: 
 * @version: 
 * @Author: 王远昭
 * @Date: 2022-07-04 19:37:34
 * @LastEditors: 王远昭
 * @LastEditTime: 2023-01-30 22:04:21
-->
## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=InvalidSyntaxxx/Blog-HairCollected&amp;type=Date)](https://star-history.com/#InvalidSyntaxxx/Blog-HairCollected&amp;Date)

## 在线预览

[https://blog.wangwangyz.site](https://blog.wangwangyz.site/)

## 本地运行

##### 安装开发环境

```
npm install
```

##### 启动开发环境

```
npm run dev
```

##### 打包生产环境

```
npm run build
```


## 开发记录

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

#### 2022年11月20日22点35分

1. 添加TsParticle粒子背景
2. 首页使用CoverFlow展示分类卡片

#### 2022年11月20日22点58分

1. 研究Git中两个分支 test1 和 main 的合并
   
    目前：test1中有 3 commits 先于 main；main中有 1 commit 先于 test1；
    
    欲：test1的改变合并到main
    > **23点27分已成功~**
    >
    > 1. 切换到test1分支 git checkout test1 （如果已经在master分支则不需要）
    > 2. git pull （拉取代码）
    > 3. git checkout main （切换到main分支）
    > 4. 代码如有冲突则解决冲突，没有则忽略此步
    > 5. git merge test1 （合并代码）
    > 6. git push （推到main）
    >
    > 

#### 2022年11月22日22点18分

1. 看到Varlet组件库的水纹效果，自己也试着添加
   跟着：[https://codepen.io/finnhvman/pen/jLXKJw](https://codepen.io/finnhvman/pen/jLXKJw)学习效仿了，效果一般，日后改进
2. 对 display和float属性有点不了解，行内元素和内联元素都有哪些？