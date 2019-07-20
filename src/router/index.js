import Vue from 'vue'
import Router from 'vue-router'
const login = () => import( /* webpackChunkName: 'Home' */ '../page/login.vue');
const Home = () => import( /* webpackChunkName: 'Home' */ '../page/home.vue');

const Product = () => import( /* webpackChunkName: 'Home' */ '../page/product.vue');
const ProOne = () => import( /* webpackChunkName: 'Home' */ '../page/product/proone.vue');
const ProTwo = () => import( /* webpackChunkName: 'Home' */ '../page/product/protwo.vue');
const ProThree = () => import( /* webpackChunkName: 'Home' */ '../page/product/prothree.vue');
const ProFour= () => import( /* webpackChunkName: 'Home' */ '../page/product/profour.vue');
const ProFive = () => import( /* webpackChunkName: 'Home' */ '../page/product/profive.vue');

const Finance = () => import( /* webpackChunkName: 'Home' */ '../page/finance.vue');

const AboutUs = () => import( /* webpackChunkName: 'Home' */ '../page/aboutus.vue');
const CompanyInfo = () => import( /* webpackChunkName: 'Home' */ '../page/aboutus/companyinfo.vue');
const Contact = () => import( /* webpackChunkName: 'Home' */ '../page/aboutus/contact.vue');

const Down = () => import( /* webpackChunkName: 'Home' */ '../page/down.vue');
Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   component: login,
    //   alias: '登录',
    // },
    {
      path: '/',
      name:'home',
      component: Home,
      alias: '首页',
    },
    {
      path: '',
      alias: '产品服务',
      children:[
        {
          path: '/proone',
          name:'proone',
          component: ProOne,
          alias: '智能排班系统',
        },
        {
          path: '/protwo',
          name:'protwo',
          component: ProTwo,
          alias: '实名考勤管理',
        },
        {
          path: '/prothree',
          name:'prothree',
          component: ProThree,
          alias: '智慧财务系统',
        },
        {
          path: '/profour',
          name:'profour',
          component: ProFour,
          alias: '众包招聘系统',
        },
        {
          path: '/profive',
          name:'profive',
          component: ProFive,
          alias: '普工自由接单',
        },
      ]
    },
    {
      path: '/finance',
      name:'finance',
      component: Finance,
      alias: '用工财税方案',
      meta: {
        keepAlive: true
      }
    },
    {
      path: '',
      alias: '关于我们',
      children:[
        {
          path: 'companyinfo',
          name:'companyinfo',
          component:CompanyInfo,
          alias: '公司介绍',
        },
        {
          path: '/contact',
          name:'contact',
          component: Contact,
          alias: '联系我们',
        }
      ]
    },
    {
      path: '/down',
      name:'down',
      component: Down,
      alias: '下载中心',
      meta: {
        keepAlive: true
      }
    },
  ]
})
