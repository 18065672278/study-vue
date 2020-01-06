<template>
  <div>
    <MHeader>列表</MHeader>
    <div class="content bookList" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book,index) in bookList" :to="{name:'Detail',params:{bid:book.bookId}}" :key="index"
                     tag="li">
          <img :src="book.bookCover" :alt="book.bookInfo">
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>￥ {{book.bookPrice}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
      <div class="more" @click="more" v-if="hasMore">加载更多</div>
    </div>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader";
  import {pagination, removeBook} from "../api/index"

  export default {
    name: "List",
    components: {
      MHeader,
    },
    data() {
      return {
        /*offset偏移量，hasMore是否有更多*/
        bookList: [], offset: 0, hasMore: true, isLoading: false
      }
    },
    created() {
      this.getBookList();
    },
    methods: {
      async getBookList() {
        if (this.hasMore && !this.isLoading) {//isLoading是为了在数据未返回的是否客户多次点击加载
          this.isLoading = true;//正在加载
          let {hasMore, books} = await pagination(this.offset);
          this.bookList = [...this.bookList, ...books];//获取的书放在bookList
          this.hasMore = hasMore;//判断是否有更多
          this.offset = this.bookList.length;//维护偏移量  就是总书的长度
          this.isLoading = false;//加载完毕
        }
      },
      async remove(id) {
        await removeBook(id);//删除某一项
        //删除后台也要删除前台
        this.bookList = this.bookList.filter(item => item.bookId !== id)
      },
      more() {
        this.getBookList();
      },
      loadMore() {
        //触发scroll事件 可能触发n次  先进来一个定时器，下次触发时将上一次的定时器清除掉
        clearTimeout(this.timer);//防抖
        this.timer = setTimeout(() => {
          //卷去的高度 可视高度    总高
          let {scrollTop, clientHeight, scrollHeight} = this.$refs.scroll;
          if (scrollTop + clientHeight + 20 > scrollHeight) {
            this.getBookList();
          }
        }, 50)
      }
    }
  }
</script>

<style scoped lang="less">
  .bookList {
    ul {
      padding: 10px;

      li {
        display: flex;
        padding: 10px 0;
        border-bottom: 1px solid #f1f1f1;

        img {
          width: 130px;
          height: 150px;
          margin-right: 10px;
        }

        h4 {
          flex: 1;
          font-size: 20px;
          line-height: 35px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        p {
          color: #2a2a2a;
          line-height: 25px;
        }

        b {
          color: red;
        }

        button {
          display: block;
          width: 60px;
          height: 30px;
          background: orange;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          outline: none;
        }
      }
    }

    .more {
      margin: 10px;
      background: #2aabd2;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 15px;
      color: #ffffff;
    }
  }
</style>
