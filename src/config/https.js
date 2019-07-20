import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Dialog } from 'vant';
import {baseUrl} from './start'
Vue.use(Dialog);

axios.defaults.timeout = 5000;                        //响应时间
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/json';        //配置请求头
axios.defaults.baseURL = baseUrl;   //配置接口地址

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if(config.method  === 'post'){
    config.data['exCode'] = '00000';
    // config.data = JSON.stringify(config.data);
    // config.data = qs.stringify(config.data);
  }else{
    config.params['exCode'] = '00000';
  }
  // config.params['exCode'] = '00000';
  // config.params['token_id'] = sessionStorage.getItem('token_id') || undefined;
  return config;
},(error) =>{
  console.log('错误的传参');
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
  //对响应数据做些事
  if(!res.data.success){
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  console.log('网络异常');
  console.log(error);
  Dialog.alert({message:error});
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
export function httpPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
////返回一个Promise(发送get请求)
export function httpGet(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then(response => {
        resolve(response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  httpPost,
  httpGet,
}
