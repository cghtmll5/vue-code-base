<template>
    <div class="login">
      <MyHeader @showEvent = 'isShowMenu()' ref="mychild" title="首页"/>
      <Menu v-show = "showMenu"/>
      <div class="login-content h100_vh pos-f content-top">
        <img class="van-button--block" src="../assets/images/login.png" alt="">
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import MyHeader from '../components/my-header'
  import Menu from '../components/menu'


  export default {
        components:{MyHeader,Menu},
        data() {
          return {
            showMenu:false,
          }
        },
        computed:{

        },
        watch:{

        },
        created(){
        },
        mounted(){

        },
        destroyed(){

        },
        methods:{
          isShowMenu: function () {
            this.showMenu = !this.showMenu;
          }
        }
  }
</script>

<style scoped>
  .yzm-img{
    display: block;
    width: 1.8rem;
    height: 0.7rem;
  }
  .login-content .van-button--small{
    padding:0;
    border:none;
  }
</style>
