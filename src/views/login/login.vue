/* eslint-disable */
<template lang="html">
  <el-row class="main">
    <el-card class="login__box">
      <div slot="header" class="login__header">
        <span> <i class="fa fa-sign-in"></i> 欢迎登录 越韵古诗</span>
      </div>
      <el-form :model="formLabelAlign">
        <el-form-item>
          <el-input v-model="formLabelAlign.name" prefix-icon="fa fa-user fa-lg" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="formLabelAlign.region"  prefix-icon="fa fa-lock fa-lg" placeholder="请输入密码"></el-input>
          <el-alert v-model="formLabelAlign.alert" v-if="formLabelAlign.alert!==''" type="warning" :closable="false">{{formLabelAlign.alert}}</el-alert>
        </el-form-item>
        <el-form-item prop="type">
          <el-checkbox label="记住密码" v-model="formLabelAlign.type"></el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login__button" @click="login('formLabelAlign')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </el-row>
</template>

<script type="text/javascript">
  import router from '../../router/router'
  import axios from 'axios'
  export default {
    // 不要忘记了 name 属性
    name: 'RangeSlider',
    // 组合其它组件
    extends: {},
    // 变量
    data () {
      return {
        formLabelAlign: {
          name: '',
          region: '',
          type: false,
          alert:''
        },
      }
    },
    computed: {},
    // 使用其它组件
    components: {},
    // 方法 
    watch: {},
    methods: {
      login (formName) {
        if(this.formLabelAlign.name == ''){
          return;
        }
        if(this.formLabelAlign.region == ''){
          this.formLabelAlign.alert = '请输入密码';
          return;
        }
        this.formLabelAlign.alert = '';
        if(this.formLabelAlign.type === true){
          console.log(this.formLabelAlign.type);
          //传入账号名，密码，和保存天数3个参数
          this.setCookie(this.formLabelAlign.name, this.formLabelAlign.region, 7); 
        }else{
          console.log("清空Cookie");
          //清空Cookie
          this.clearCookie();
        }
        //向后端发送数据
          axios.post('http://localhost:7001/Admin/Login',{
            name:this.formLabelAlign.name,
            password:this.formLabelAlign.region
          })
          .then(function(res){
            console.log(res);
            if(res.status = true){
              localStorage.name = this.loginForm.name;
              alert("管理员成功");
              router.push({ path: '/admin/index' });
            }
            
          })
          .catch(function(err){
            console.log(err);
            alert("登录失败，请检查登录信息");
          });
      },
        //设置cookie
      setCookie(c_name, c_region, exdays){
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie = "userPwd" + "=" + c_region + ";path=/;expires=" + exdate.toGMTString();
        console.log(window.document.cookie);
      },
      //读取cookie
      getCookie: function() {
          if (document.cookie.length > 0) {
              var arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
              for (var i = 0; i < arr.length; i++) {
                  var arr2 = arr[i].split('='); //再次切割
                  //判断查找相对应的值
                  if (arr2[0] == 'userName') {
                      this.formLabelAlign.name = arr2[1]; //保存到保存数据的地方
                  } else if (arr2[0] == 'userPwd') {
                      this.formLabelAlign.region = arr2[1];
                  }
                  this.formLabelAlign.type = true;
              }
          }
      },
      //清除cookie
      clearCookie: function() {
          this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
      }
    },
    // 生命周期函数
    beforeCreate () {},
    //页面加载读取cookie
    mounted () {
      this.getCookie();
    }
  }
</script>

<style scoped lang="scss">
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/login_bg.jpg');
    background-size: cover;
    background-position: 50%;
    .login__box {
      position: absolute;
      top: 20%;
      // transform: translateY(-56%);
      // -webkit-transform: translateY(-56%);
      right: 70px;
      width: 350px;
      .login__header {
        font-weight: bold;
        text-align: left;
      }
      .login__button {
        width: 100%;
      }
    }
  }
</style>