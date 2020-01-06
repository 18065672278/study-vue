<template>
  <div class="detail">
    <MHeader :back="true">详情ID:{{bid}}</MHeader>
    <ul>
      <li>
        <label for="bookName">书籍名称</label>
        <input type="text" v-model="book.bookName" id="bookName">
      </li>
      <li>
        <label for="bookName">书籍价格</label>
        <input type="number" v-model.number="book.bookPrice" id="bookPrice">
      </li>
      <li>
        <label for="bookName">书籍信息</label>
        <textarea type="text" v-model="book.bookInfo" id="bookInfo"/>
      </li>
      <li>
        <button @click="update">确定修改</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader";
  import {findOneBook, updateBook} from "../api/index"

  export default {
    name: "Detail",
    data() {
      return {
        book: {}
      }
    },
    watch: {
      $route() {//只要路径变化 重新获取数据
        this.getBookDetail();
      }
    },
    components: {
      MHeader
    },
    computed: {
      bid() {
        return this.$route.params.bid//将路径参数的ID映射到bid上
      }
    },
    created() {//页面一加载 需要根据id 发送请求获取书籍数据
      this.getBookDetail();
    },
    methods: {
      async getBookDetail() {
        this.book = await findOneBook(this.bid);
        //如果是空对象 需要跳转回列表页
        Object.keys(this.book).length > 0 ? void 0 : this.$router.push('/list')
      },
      async update() {//点击修改图书信息
        await updateBook(this.bid,this.book);
        //修改完成后跳转页面
        this.$router.push('/list')
      }
    }
  }
</script>

<style scoped lang="less">
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #ffffff;
    z-index: 1;

    ul {
      margin: 50px 10px 0 10px;

      li {
        label {
          display: block;
          font-size: 20px;
        }

        input, textarea {
          margin: 10px 0;
          padding: 5px;
          height: 25px;
          width: 100%;
        }

        textarea {
          height: 80px;
          resize: none; //禁止拉伸
        }

        button {
          display: block;
          width: 60px;
          height: 30px;
          background: #2aabd2;
          color: #ffffff;
          border: none;
          border-radius: 5px;
          outline: none;
        }
      }

    }
  }
</style>
