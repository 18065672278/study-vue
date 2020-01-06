import axios from 'axios'
//增加默认的请求路径
axios.defaults.baseURL = 'http://localhost:3000';

axios.interceptors.response.use((res) => {
  return res.data;//在这里统一拦截结果，把结果处理成res.data
})

//获取轮播图数据,返回的是一个promise对象
export let getSliders = () => {
  return axios.get('/sliders')
}

//获取热门图书
export let getHotBook = () => {
  return axios.get('/hot')
}

//获取全部图书
export let getBooks = () => {
  return axios.get('/book')
}

//删除某一本图书
export let removeBook = (id) => {
  return axios.delete(`/book?id=${id}`)
}

//获取某一本书籍
export let findOneBook = (id) => {
  return axios.get('/book?id=' + id)
}

//修改书籍
/*
* @param id 书籍编号
* @param data 书籍数据  请求体发送
* @return ｛AxiosPromise<T>｝
* */
export let updateBook = (id, data) => {
  return axios.put('/book?id=' + id, data)
}

export let addBook = (data) => {
  return axios.post('/book', data)
}
//直接获取首页所需要的所有数据
export let getAll = () => {
  return axios.all([getSliders(), getHotBook()])
}


//分页获取数据,根据偏移量返回对应的数据
export let pagination = (offset) => {
  return axios.get('/page?offset=' + offset)
}
