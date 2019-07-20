<template>
  <div class="vant-header">
    <van-row class="m-header title-bar-pt title-bar-height">
      <van-col span="5" class="pos-r">
        <van-icon
          name="arrow-left"
          class="m-header-icon"
          @click="back()"
        ></van-icon>
　　　</van-col>
      <van-col span="14" class="tcenter fs36">
　　　　  {{title}}
　　　</van-col>
      <van-col span="5" class="pos-r">
        <van-icon @click="showMenu()" name="apps-o"
            class="m-header-icon-r"
        ></van-icon>
　　　</van-col>
    </van-row>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Row, Col,Icon}from 'vant'
  Vue.use(Row).use(Col).use(Icon);

export default {
  props:{
    title:{
      type:String,
      required:true,
      default:'title',
    }
  },
  data () {
    return {

    }
  },
  created(){
  },
  mounted(){

  },
  destroyed(){

  },
  methods:{
    back: function () {
      console.log('go----');
      this.$router.go(-1);
    },
    showMenu:function () {
      this.$emit("showEvent");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vant-header{
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index:8;
  }
  .m-header {
    height:.9rem;
    line-height:.9rem;
    background: #245fd7;
    color: #fff;
  }
  .m-header-icon {
    position: absolute;
    top:.15rem;
    left:.15rem;
    padding:.15rem;
    font-size:.36rem;
  }
  .m-header-icon-r {
    position: absolute;
    top:.15rem;
    right:.15rem;
    padding:.15rem;
    font-size:.42rem;
  }
</style>
