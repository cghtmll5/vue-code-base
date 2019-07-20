<template>
    <div class="login">
      <MyHeader ref="mychild" title="登录"/>
      <div class="login-content h100_vh pos-f content-top">
        <img class="van-button--block" src="../assets/images/login.png" alt="">
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            placeholder="请输入用户名"></van-field>
          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required></van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field
            v-model="sms"
            center
            required
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
          >
            <van-button slot="right-icon" class=""  size="small" type="default" @click="getCheckCode()">
              <img class="yzm-img" :src="smsImgSrc" alt="">
            </van-button>
          </van-field>
        </van-cell-group>
        <div v-if="isLogin">{{userInfo + '---' + getChangedNum}}</div>
        <div v-if="isLogin" @click="stateTest()">{{ helloWorld  }}  {{id}}</div>
        <div class="login-btn tcenter pt40">
          <van-button type="info" class="w90 m-auto" @click = "login()">登录</van-button>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import {deskey} from "../config/start";
  import {httpPost,httpGet} from "../config/https";
  import {mapState,mapGetters, mapMutations} from 'vuex'
  import {CellGroup, Field,Button, toast} from 'vant'
  import {encryptByDES} from '../assets/plugins/mode-ecb'
  import MyHeader from '../components/my-header'

  Vue.use(Field).use(Button).use(CellGroup).use(toast);

  export default {
        components:{MyHeader},
        data() {
          return {
            username:'',
            password:'',
            sms:'',
            tokenId:'',
            smsImgSrc:''
          }
        },
        computed:{
          ...mapState({
            helloWorld:state => state.helloWorld,
            userInfo:'userInfo',
            id:'tokenId',
          }),
          ...mapGetters({
              isLogin:'isLogin',
              getChangedNum:'getChangedNum'
            }
          )
        },
        watch:{

        },
        created(){
          this.getToken();
          console.log(encryptByDES);
        },
        mounted(){

        },
        destroyed(){

        },
        methods:{
          ...mapMutations([
            'SAVE_TOKENID',
            'newNum'
          ]),
          stateTest: function(){
            this.newNum(1);
            console.log(this.isLogin);
          },
          /*
           * 校验
          */
          valid:async function () {
            let _this = this;
            if(!_this.username){
              _this.$toast('请输入登录账号！');
              return false
            }
            if(!_this.password){
              _this.$toast('请输入密码！');
              return false
            }
            if(!_this.sms){
              _this.$toast('请输入验证码！');
              return false
            }
            if(!_this.tokenId){
              await _this.getToken();
            }
            return true
          },
          getToken: function(){
            let _this = this;
            httpGet('getToken',{}).then( res => {
              _this.tokenId = res.data.token_id;
              console.log(res);
              _this.getCheckCode();
            }).catch( err => {
              _this.$toast(err);
            });
          },
          getCheckCode:async function () {
            let _this = this;
            if (_this.isRequestingImageCode) {
              _this.$toast("正在获取图片验证码...");
              return;
            }
            _this.isRequestingImageCode = true;
            httpGet('getPhotoCheckCode',{
              token_id: _this.tokenId
            }).then( res => {
              console.log(res);
              _this.smsImgSrc = "data:image/png;base64," + res.data.randomCode;
            }).catch( err => {
              _this.$toast(err);
            });
            _this.isRequestingImageCode = false;
          },
          /*
           * 登录
           */
          login:function () {
            let _this = this;
            if(!_this.valid()){
              return
            }
            if(_this.request){
              return
            }
            _this.request = true;
            console.log(deskey);
            let params = {
              token_id: _this.tokenId,
              account: encryptByDES(_this.username.trim() + this.tokenId, deskey),
              password: encryptByDES(_this.password.trim() + this.tokenId, deskey),
              randomCode: _this.sms.trim(),
              auth_type: "1"
            };
            console.log('2');
            httpPost('doLogin',params).then( res => {
                console.log(res);
                _this.SAVE_TOKENID(_this.tokenId);
            }).catch( err => {
                _this.$toast(err);
            });
            _this.request = false;
          },
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
