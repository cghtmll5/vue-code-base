// 全局配置
let baseUrl = '';
let imgUrl = '';
let deskey = "";
if (process.env.NODE_ENV === 'development'){
  baseUrl = "";//hello wrold
  imgUrl = '';
  deskey = "";
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https.www.baidu.com';
  imgUrl = 'https.www.baidu.com';
  deskey = "https.www.baidu.com";
}
export  {
  baseUrl,
  imgUrl,
  deskey,
}
