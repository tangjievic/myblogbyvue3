# myblogbyvue3

## 这个是基于vue/cli4h和vue3构建的多页面博客项目
- index 主页面
- user 是用户页面
- artdetail 是文章详情页面
- artlist 文章列表页面
- update文件夹是 博客更新时间表页面

以上组成pc端应用，利用后端的静态渲染，以此来达到seo的目的(为什么不做服务器渲染，因为本人的穷买的虚拟机，改不了服务器端配置)

- admin 是管理端应用
- mbpage 移动端应用

## vue3组件传值(写在setup中)
- 1.父传子 父组件-provide-provide(<名>,值);
- 2.子组件 inject-inject(<名>);

## 项目初始化
```
npm install
```

### 项目启动
```
npm run start
```

### 项目打包
```
npm run build
```

### lint修复
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
