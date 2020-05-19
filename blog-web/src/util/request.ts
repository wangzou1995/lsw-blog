import axios from 'axios'

const service = axios.create({
  baseURL: '',
  timeout: 15000 // 请求超时时间
});


// http request 请求拦截器，有token值则配置上token值
// service.interceptors.request.use(
//     config => {
//         if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//             config.headers.Authorization = token;
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
// });

service.interceptors.response.use(
  function (response) {
    //请求正常则返回
    return Promise.resolve(response)
  },
  function (error) {
    // 请求错误则向store commit这个状态变化
    // const httpError = {
    //     hasError: true,
    //     status: error.response.status,
    //     statusText: error.response.statusText
    // }
    // store.commit('ON_HTTP_ERROR', httpError)
    return Promise.reject(error)
  }
);

export default service
