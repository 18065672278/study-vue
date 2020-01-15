<template>
  <div>
    <MHeader>添加</MHeader>
    <div class="content">
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
          <label for="bookName">书籍封面</label>
          <input type="text" v-model="book.bookCover" id="bookCover">
        </li>
        <li>
          <button @click="addBook">添加图书</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader";
  import {addBook} from "../api/index"

  export default {
    name: "",
    data() {
      return {
        book: {}
      }
    },
    watch: {},
    components: {MHeader},
    computed: {},
    created() {
    },
    methods: {
      async addBook() {
        await addBook(this.book);
        this.$router.push('/list');
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    ul {
      margin: 10px 10px 0 10px;

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
