<template>
    <div class="login">
      <MyHeader ref="mychild" title="用工财税方案"/>
      <div class="login-content h100_vh pos-f content-top">
        <img class="van-button--block" src="../assets/images/login.png" alt="">
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import MyHeader from '../components/my-header'


  export default {
        components:{MyHeader},
        data() {
          return {
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
