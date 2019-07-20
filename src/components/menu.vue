<template>
  <div class="menu pl30 content-top pt15 pb15">
    <div class="nav-item tleft"
         v-for="(item, index) in $router.options.routes"
         :class="{'item-h':tabIndex == index}"
         :key="index">
          <router-link :to="item.path">{{item.alias}}</router-link>
          <i v-if="item.children" class="icon-right" @click="have(index)">有</i>
          <div class="pl30 ml15 item-children"
               v-for="(childItem,childIndex) in item.children"
               :key="childIndex">
            <router-link :to="childItem.path">
              {{childItem.alias}}
            </router-link>
          </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

export default {
  props:{},
  data () {
    return {
      isHave:false,
      tabIndex:-1,
    }
  },
  created(){
  },
  mounted(){

  },
  destroyed(){

  },
  methods:{
    have:function (index) {
      if(this.tabIndex == index){
        this.tabIndex = -1;
      }else{
        this.tabIndex = index;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
