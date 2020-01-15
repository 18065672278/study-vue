<template>
  <div>
    <MHeader>列表</MHeader>
    <div class="content bookList" ref="scroll" @scroll="loadMore">
      <ul>
        <router-link v-for="(book,index) in bookList" :to="{name:'Detail',params:{bid:book.bookId}}" :key="index"
                     tag="li">
          <div>
            <img v-lazy="book.bookCover" :alt="book.bookInfo">
          </div>
          <div>
            <h4>{{book.bookName}}</h4>
            <p>{{book.bookInfo}}</p>
            <b>￥ {{book.bookPrice}}</b>
            <div class="btn-list">
              <button @click.stop="remove(book.bookId)">删除</button>
              <button @click.stop>购买</button>
            </div>
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
    mounted() {
      let scroll = this.$refs.scroll;
      let top = scroll.offsetTop;
      let distance = 0;
      let isMove = false;
      scroll.addEventListener('touchstart', (e) => {
        //滚动条在最顶端 并且滚动距离为0时（当前盒子在顶端） 才继续走
        if (scroll.scrollTop != 0 || scroll.offsetTop != top) return
        let start = e.touches[0].pageY;//手指点击的开始
        let move = (e) => {
          isMove = true;
          let current = e.touches[0].pageY;
          distance = current - start;//求拉动的距离  负的不要
          if (distance > 0) {
            distance = distance > 50 ? 50 : distance;
            scroll.style.top = distance + top + 'px';
          } else {
            //如果不在考虑范围内  则要移除touchmove和touchend
            scroll.removeEventListener('touchmove', move);
            scroll.removeEventListener('touchend', end);
          }
        }
        let end = (e) => {
          if(!isMove)return;
          isMove = false;
          clearInterval(this.timer1);
          this.timer1 = setInterval(() => {
            if (distance <= 0) {
              clearInterval(this.timer1);
              distance = 0;
              scroll.style.top = top + 'px';
              this.bookList = [];//先清空数据
              this.offset = 0;
              this.getBookList();
              scroll.removeEventListener('touchmove', move);
              scroll.removeEventListener('touchend', end);
              return;
            }
            distance -= 1;
            scroll.style.top = top + distance + 'px';
          }, 1)
        };
        scroll.addEventListener('touchmove', move);
        scroll.addEventListener('touchend', end);
      });

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

        .btn-list {
          display: flex;
          justify-content: space-around;
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
