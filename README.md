预览地址： [http://demo.lanbuding.com/s/vue3-tiger-admin/](http://demo.lanbuding.com/s/vue3-tiger-admin/)

仓库地址： [https://github.com/jikeytang/vue3-tiger-admin](https://github.com/jikeytang/vue3-tiger-admin)
技术栈为：Vite, Vue3, Arco, Pinia, VueUse, Axios, UnoCSS, Scss

### 1. Vue3-Tiger-Admin介绍
`Tiger` 项目定位是一款业务项目前的模板项目，就是基于`Vue3`技术框架下的各种组件和第三方资源整合的练习场，基于这个大前提下，在技术融合和功能的实现上更为灵活。

#### 1.1 基本介绍

#### 1.2 如何发布上线
打包后dist提交到git，然后在gitee仓库中，服务\`gitee pages`中发布上线，需要身份证实名认证。

### 2. 技术介绍
#### 2.1 基本介绍
- Vite
  `Vue3`推荐与`Vite`进行搭配，优点 热更新是相当的快，但是首次加载的编译需要等待一段时间，但也不长，可以忍受。因为太好用了，所以不得不在`React`项目上尝试一下，结果只能说，很香。参见这个项目 [https://gitee.com/jsfront/react-tiger-admin](https://gitee.com/jsfront/react-tiger-admin)，创建`React`还是基于这个命令：
```
$ pnpm create vite
```
更多了解：[https://cn.vitejs.dev/](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)

- Vue3
  最大的体验，更为灵活，代码实现方案更为多选。如果将来某天换为`React`技术栈，复用的代码可能不少，如果是`jsx`可能更多。但这项目选择依然用`*.vue`模板的初衷时如果接手维护其它项目时技术上出现陌生感，不能快速上手。保持对各种技术的博爱和激情也是一个技术人应有的素养。
- Arco
  这次选择`Arco`时，`Element`在2.0的时候已经用腻了，正好看看其它的框架的时候，被朋友安利了这款。初期比较下来，组件数量多，单个组件功能更为强大，所以就选择这款呀。整体用下来，用法还是与`Element`有不少差别，如果以前有`andv`的项目，部分代码到可以复用，因为都是`<a-* />`的标签。相比于`Element`在组件的细节和交互动画上还是有不少可以优化提升的地方。比如`MessageBox`, `TreeNode`。


> 在国产框架里边有一款新起之秀，各位可以通过这个链接了解一下：[vexipui](https://vexipui.com/zh-CN)

- Pinia
  这款框架与`React`的`Mobx`思路极为相似，是吸引了`Vuex`的优点改进了之后的一个极为灵活的管理工具。
- VueUse
  这款已经是`Vue2`项目的标配了，以方便、灵活、巧妙等特点吸引了大部分开发者，而作者也是一个高产且优秀的人，还有一款`UnoCSS`随后介绍。
- UnoCSS
  UnoCSS依灵活、高速的原子化方式应用在项目中，还是比较好的。

#### 2.2 其它插件

- [screenfull](https://www.npmjs.com/package/screenfull)
  主要封装浏览器全屏事件
- [@iconify/vue](https://github.com/iconify/iconify)
  可以灵活引用多处图标，可以上这个网站进行查询 [https://icones.js.org/](https://icones.js.org/)
- [qrcode.vue](https://github.com/scopewu/qrcode.vue)
  以多种方式生成二维码，可以带Logo
- [vue3-pdfjs](https://github.com/randolphtellis/vue3-pdfjs)
  预览PDFJS
- [vue3-print-nb](https://www.npmjs.com/package/vue3-print-nb)
  打印页面

#### 2.3 技术栈
技术 | 说明 | 官网
----|----|----
Vue3 | JavaScript 框架 | [https://cn.vuejs.org/](https://cn.vuejs.org/)
Vite | Vite下一代的前端工具链 | [https://cn.vitejs.dev/](https://cn.vitejs.dev/)
@arco-design/web-vue | 前端UI组件库 | [https://arco.design/vue/](https://arco.design/vue/)
@vueuse/core | Vue工具库  | [https://vueuse.org/](https://vueuse.org/)
@iconify/vue | 图标字体库  | [https://www.npmjs.com/package/@iconify/vue](https://www.npmjs.com/package/@iconify/vue)
lodash | 工具库  | [https://lodash.com/](https://lodash.com/)
Vue3-clipboard | 剪贴板  | [https://github.com/Daizhen1995/vue3-clipboard](https://github.com/Daizhen1995/vue3-clipboard)
Qrcode | 生成二维码  | [https://github.com/soldair/node-qrcode](https://github.com/soldair/node-qrcode)
Md-editor-v3 | Markdown编辑器 | [https://github.com/imzbf/md-editor-v3](https://github.com/imzbf/md-editor-v3)
Juejin-markdown-themes | Juejin MD主题  | [https://github.com/xitu/juejin-markdown-themes](https://github.com/xitu/juejin-markdown-themes)
Sass | CSS 预编译工具  | [https://sass-lang.com/](https://sass-lang.com/)
Unocss | 原子化CSS | [https://github.com/unocss/unocss](https://github.com/unocss/unocss)
Animate.css | CSS动画库  | [https://animate.style/](https://animate.style/)
#### 2.4 文件结构
```javascript
├─dist // 打包资源
├─public
│  ├─pdf // pdf测试文档
│  └─tinymce4.7.5 // 富文本
└─src
    ├─api // api文档 
    ├─assets // 静态资源文档
    ├─components // 组件文档
    ├─config // 配置文档
    ├─hooks // hooks
    ├─layouts // 布局文档
    ├─router // 路由
    ├─store // Pinia
    ├─styles // css
    ├─types // ts
    ├─utils // 工具文档
    └─views // 视图层
        ├─basic // 基础
        ├─canvas // canvas
        ├─chart // 图表
        ├─form // 表单
        ├─login // 登录
        ├─map // 地图
        ├─my-component // 组件演练场
        ├─my-pages // 页面演练场
        ├─other // 其它
        ├─table // 表格
        └─video // 视频
```
#### 2.5 如何在本地运行
根目录下运行 `npm install`，然后运行 `npm dev`
```
// 切换环境
nvm install 16.0.0
nvm use 16.0.0

// 安装依赖
npm install

// 启动项目
npm start

// 清除 node_modules
npm run clean

// 全局安装 rimraf 之后方可使用
npm i rimraf -g

// 清除 node_modules 重新安装依赖
// 等同于 npm run clean && npm install
npm run reinstall

```
