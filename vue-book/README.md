## 使用less
```$xslt
 npm install less less-loader axios vuex bootstrap
```
- mock 模拟数据
- api 代表的是所有的接口
- base 基础组件
- components 页面组件


## 热门图书的功能
- 先写服务端，确保数据能正常返回
- 增加API方法实现调取数据的功能
- 在哪个组件中应用这个api，如果是一个基础组件需要用这些数据，在使用这个组件的父级中调用这个返回，将数据传递给基础组件
- 写一个基础组件
    - 想创建一个.vue文件
    - 在需要使用这个组件的父级中引用这个组件
    - 在组件中注册这个组件
    - 以标签的形式引入

## 路由元信息
- 在router->index中的对应路径增加meta:{keepAlive:true}
- 在App.vue 中增加keep-alive标签
```
    <keep-alive>
      <!--需要缓存的内容-->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!--不需要缓存的内容-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
```

## 下拉加载
- 每次默认给五条，前端告诉后台要从第几条开始给我
- /page?offset = 5
- 后台返回时还要告诉前端时候有更多的数据 hasMore:false/true
- 滚动到底部居然20px的地方，开始加载更多：元素.scrollTop + 元素.clientHeight + 20 == 元素.scrollHeight
-                                              元素距离顶部高度 +元素高度 +10px == 元素总高度
