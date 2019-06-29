// 全局配置
let baseUrl = '';
let imgUrl = '';
let deskey = "";
if (process.env.NODE_ENV === 'development'){
  baseUrl = "http://47.110.152.126:8020/auction/";
  imgUrl = 'http://47.110.152.126/';
  deskey = "mpT8PcFm4IvU+uZMHy3Tn0YjlGcQcc0zbC8DAXmMw13XcHGL7A7KTA==";
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://phone.youpaiwang.com/auction/';
  imgUrl = 'https://image.youpaiwang.com/';
  deskey = "sEv/0y/0uB6d4H48RBQwRW9d14010WWxYXsteygaOh/XcHGL7A7KTA==";
}
export  {
  baseUrl,
  imgUrl,
  deskey,
}
