<template>
  <div>
    <MHeader>首页</MHeader>
    <div class="content">
      <Loding v-if="loading"></Loding>
      <template v-else>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="bookList">
          <h3>热门图书</h3>
          <ul>
            <li v-for="(book,index) in hotBooks" :key="index">
              <img :src="book.bookCover" :alt="book.bookInfo">
              <b :alt="book.bookName">{{book.bookName}}</b>
              <span style="color:red">￥ {{book.bookPrice}}</span>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader";
  import Swiper from "../base/Swiper";
  import Loding from "../base/Loading"
  import {getAll} from "../api";


  export default {
    name: "Home",
    components: {
      MHeader,
      Swiper,
      Loding
    },
    data() {
      return {
        sliders: [],
        hotBooks: [],
        loading: true
      }
    },
    created() {
      /*this.getSlider();//获取轮播图
      this.getHot();//获取图书*/
      this.getData();
    },
    methods: {
      async getData() {
        let [sliders, hotBooks] = await getAll();//直接一次性调两个接口
        this.sliders = sliders;
        this.hotBooks = hotBooks;
        //...轮播图和热门图书已经获取完成
        this.loading = false;
      }
      /*async getSlider() {
        //async  作为一个关键字放到函数前面，用于表示函数是一个异步函数,async 函数返回的是一个promise 对象
        //await  代码需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码
        this.sliders = await getSliders();//直接获取数组里的dataqu取别名为sliders
      },
      async getHot() {
        this.hotBooks = await getHotBook();
      }*/
    }
  }
</script>

<style scoped lang="less">
  .bookList {
    width: 90%;
    margin: auto;

    h3 {
      color: #999999;
      padding: 5px 0px;
    }

    ul {
      display: flex;
      flex-wrap: wrap;

      li {
        width: 50%;
        padding: 2%;

        img {
          width: 100%;
        }

        b {
          display: block;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 16px;
        }
      }
    }
  }
</style>
