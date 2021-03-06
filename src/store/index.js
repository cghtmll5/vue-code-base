import Vue from 'vue'
import Vuex from 'vuex'
import {SAVE_TOKENID}from './mutation-types'

Vue.use(Vuex);

const state={   //要设置的全局访问的state对象
  show: true,
  num:0,
  tokenId:'12313',
  login:false,
  userInfo:'hello cg',
  helloWorld:'vuex真的好用!',
  adressList:[],
  //要设置的初始属性值
};
const getters = {   //实时监听state值的变化(最新状态)
  isShow(state) {  //承载变化的show的值
    return state.show
  },
  isLogin(state){
    return state.login;
  },
  getChangedNum(){  //承载变化的changebleNum的值
    return state.num
  }
};
const mutations = {
  show(state) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
    state.show = true;
  },
  hide(state) {  //同上
    state.show = false;
  },
  newNum(state,sum){ //同上，这里面的参数除了state之外还传了需要增加的值sum
    state.num += sum;
  },
  [SAVE_TOKENID](state, token_id){
    state.tokenId = token_id;
    state.login = true;
    sessionStorage.setItem('token_id',token_id);
  }
};
const actions = {
  hideDom(context) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('hide');
  },
  showDom(context) {  //同上注释
    context.commit('show');
  },
  getNewNum(context,num){   //同上注释，num为要变化的形参
    context.commit('newNum',num);
  },

};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store;
