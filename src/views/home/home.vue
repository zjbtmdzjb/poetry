<template>
  <el-row class="home">
    <el-row class="home__container">
      <el-col span="12" class="home__link"><a href="http://www.szchengnan.com/" target="_blank">嵊州市城南小学欢迎你</a></el-col>
      <el-col span="12" class="home__test">
        <router-link :to="{ path: '/login' }">管理员登录</router-link>&nbsp;&nbsp;
        <a href="javascript:void(0);" @click="LoginVisible = true">学生登录</a>&nbsp;&nbsp;
        <a href="javascript:void(0);" @click="dialogVisible = true" v-if="isLogin">{{ type }}在线测试 <i class="fa fa-arrow-circle-o-right"></i></a>
      </el-col>
      <el-col span="24">
        <img class="home__logo" src="../../assets/logo.jpg" alt="校园全景">
      </el-col>
    </el-row>

    <el-dialog
      title="登录/注册"
      :visible.sync="LoginVisible"
      width="25%">
      <el-tabs type="card">
        <el-tab-pane label="学生登录">
          <el-form ref="form" :model="loginForm" label-width="60px">
            <el-form-item label="姓名">
              <el-input v-model="loginForm.name" placeholder="请输入姓名"></el-input>
              <el-alert v-model="loginForm.nameAlert" v-if="loginForm.nameAlert!==''" type="warning" :closable="false">{{loginForm.nameAlert}}</el-alert>
            </el-form-item>
            <el-form-item label="班级">
              <el-input v-model="loginForm.class" placeholder="请输入班级"></el-input>
              <el-alert v-model="loginForm.classAlert" v-if="loginForm.classAlert!==''" type="warning" :closable="false">{{loginForm.classAlert}}</el-alert>
            </el-form-item>
            <el-form-item label="学号">
              <el-input v-model="loginForm.id" placeholder="请输入学号"></el-input>
              <el-alert v-model="loginForm.idAlert" v-if="loginForm.idAlert!==''" type="warning" :closable="false">{{loginForm.idAlert}}</el-alert>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="StudentLogin('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="学生注册">
          <el-form ref="form" :model="registerForm" label-width="60px">
            <el-form-item label="姓名">
              <el-input v-model="registerForm.name" placeholder="请输入姓名"></el-input>
              <el-alert v-model="registerForm.nameAlert" v-if="registerForm.nameAlert!==''" type="warning" :closable="false">{{registerForm.nameAlert}}</el-alert>
            </el-form-item>
            <el-form-item label="班级">
              <el-input v-model="registerForm.class" placeholder="请输入班级 格式3-2 为3年2班"></el-input>
              <el-alert v-model="registerForm.classAlert" v-if="registerForm.classAlert!==''" type="warning" :closable="false">{{registerForm.classAlert}}</el-alert>

            </el-form-item>
            <el-form-item label="学号">
              <el-input v-model="registerForm.id" placeholder="请输入学号"></el-input>
              <el-alert v-model="registerForm.ideAlert" v-if="registerForm.idAlert!==''" type="warning" :closable="false">{{registerForm.idAlert}}</el-alert>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="StudentRegister">注册</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>

    <el-dialog
      title="选择题量"
      :visible.sync="dialogVisible"
      width="30%">
      <span>总题数：<strong>{{ number }}</strong></span>
      <span :style="{color: warningcolor}">已选题数: {{chooseNumber}} </span>
      <el-row class="test__num">
        <span>选择题：</span>
        <el-input-number 
          v-model="num1" 
          @change="handleChange" 
          :min="0" 
          :max="number"
          size="small" 
          label="选择题"></el-input-number>
      </el-row>

      <el-row class="test__num">
        <span>判断题：</span>
        <el-input-number 
          v-model="num2" 
          @change="handleChange" 
          :min="0" 
          :max="number"
          size="small" 
          label="判断题"></el-input-number>
      </el-row>

      <el-row class="test__num">
        <span>欣赏题：</span>
        <el-input-number 
          v-model="num3" 
          @change="handleChange" 
          :min="0" 
          :max="number"
          size="small" 
          label="欣赏题"></el-input-number>
      </el-row>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
  import router from '../../router/router'
  import axios from 'axios'

  export default {
    props:{
      warningcolor:{
        type:String,
        default:'black'
      }
    },
    data () {
      return {
        loginForm:{
          name:'',
          class:'',
          id:'',
          nameAlert:'',
          classAlert:'',
          idAlert:'',
          error:''
        },
        registerForm:{
          name:'',
          class:'',
          id:'',
          nameAlert:'',
          classAlert:'',
          idAlert:''
        },
        isLogin:true,
        LoginVisible: false,
        type: '越韵古诗',
        dialogVisible: false,
        number: 50,
        num1: 0,
        num2: 0,
        num3: 0
      }
    },
    computed:{
      chooseNumber:function(){
        if(this.num1+this.num2+this.num3 > this.number){
          this.warningcolor = 'red';
        }else{
          this.warningcolor = 'black';
        }
        return this.num1+this.num2+this.num3;
      }
    },
    methods: {
      confirm () {
        router.push({ name: 'Test',params:{
    choice: [
      {
        id: 1,
        question: "1+1=?",
        option: [
          '2', '3', '4', '5'
        ],
        analysis: '简单的运算',
        image: 'www.baidu.com', //可选
      },
      {
        id: 2,
        question: "1+1=?",
        option: [
          '2', '3', '4', '5'
        ],
        analysis: '简单的运算',
        image: 'www.baidu.com', //可选
      },
    ], // 选择题
    judge: [
      {
        id: 1,
        question: "1+1=2",
        analysis: '简单的运算',
        image: 'www.baidu.com', //可选
      },
    ],// 判断题
    admiring: [
      {
        id: 1,
        question: "1+1=?",
        option: [
          '2', '3', '4', '5'
        ],
        analysis: '简单的运算',
        video: 'www.baidu.com', //可选
      },
    ], // 欣赏题
  }});
        if(this.num1+this.num2+this.num3 != this.number){
          alert('题目数不符合要求');
          return;
        }
        axios.post('http://localhost:7001/poetry/Library',{
          num:[this.num1,this.num2,this.num3]
        })
        .then(function(res){
          console.log(res);
          if(res.status == true){
            router.push({ name: 'Test ',params:{
    choice: [
      {
        id: 1,
        question: "1+1=?",
        option: [
          '2', '3', '4', '5'
        ],
        analysis: '简单的运算',
        image: 'www.baidu.com', //可选
      },
    ], // 选择题
    judge: [
      {
        id: 1,
        question: "1+1=2",
        analysis: '简单的运算',
        image: 'www.baidu.com', //可选
      },
    ],// 判断题
    admiring: [
      {
        id: 1,
        question: "1+1=?",
        option: [
          '2', '3', '4', '5'
        ],
        analysis: '简单的运算',
        video: 'www.baidu.com', //可选
      },
    ], // 欣赏题
  }});
          }
        })
        .catch(function(err){
            console.log(err);
            alert("提交失败，请检查信息");
            
        });
      },
      StudentLogin(formName){
        //登录字符验证
        var passed = true;
        var reg = /[0-9]-[0-9]/;
        if(this.loginForm.name == ''){
          this.loginForm.nameAlert = '用户名不能为空';
          passed = false;
        }else if(this.loginForm.name != ''){
          this.loginForm.nameAlert = '';
        }
        if(this.loginForm.class == ''){
          this.loginForm.classAlert = '班级不能为空';
          passed = false;
        }else if(!reg.test(this.loginForm.class)){
          this.loginForm.classAlert = '班级格式错误';
          passed = false;
        }else if(this.loginForm.class != '' && reg.test(this.loginForm.class)){
          this.loginForm.classAlert = '';
        }
        if(this.loginForm.id == ''){
          this.loginForm.idAlert = '学号不能为空';
          passed = false;
        }else if(this.loginForm.id != ''){
          this.loginForm.idAlert = '';
        }
        if(!passed){
          return;
        }else{
          this.loginForm.nameAlert = '';
          this.loginForm.classAlert = '';
          this.loginForm.idAlert = '';
          //向后端发送数据
          axios.post('http://localhost:7001/Login',{
            name:this.loginForm.name,
            class:this.loginForm.class,
            id:this.loginForm.id
          })
          .then(function(res){
            console.log(res);
            if(res.status = true){
              localStorage.name = this.loginForm.name;
              localStorage.class = this.loginForm.class;
              localStorage.id = this.loginForm.id;
              alert("登录成功");
              router.push({ path: '/' });
            }
            
          })
          .catch(function(err){
            console.log(err);
            alert("登录失败，请检查登录信息");
          });

        }
      },
      StudentRegister(){
        var passed = true;
        var reg = /[0-9]-[0-9]/;
        if(this.registerForm.name == ''){
          this.registerForm.nameAlert = '用户名不能为空';
          passed = false;
        }else if(this.registerForm.name != ''){
          this.registerForm.nameAlert = '';
        }
        if(this.registerForm.class == ''){
          this.registerForm.classAlert = '班级不能为空';
          passed = false;
        }else if(!reg.test(this.registerForm.class)){
          this.registerForm.classAlert = '班级格式错误';
          passed = false;
        }else if(this.registerForm.class != '' && reg.test(this.registerForm.class)){
          this.registerForm.classAlert = '';
        }
        if(this.registerForm.id == ''){
          this.registerForm.idAlert = '学号不能为空';
          passed = false;
        }else if(this.registerForm.id != ''){
          this.registerForm.idAlert = '';
        }
        if(!passed){
          return;
        }else{
          this.registerForm.nameAlert = '';
          this.registerForm.classAlert = '';
          this.registerForm.idAlert = '';
          //向后端发送数据
          axios.post('http://localhost:7001/Reg',{
            name:this.registerForm.name,
            class:this.registerForm.class,
            id:this.registerForm.id
          })
          .then(function(res){
            console.log(res);
            if(res.status = true){
              localStorage.name = this.registerForm.name;
              alert("注册成功");
              router.push({ path: '/test' });
            }
          })
          .catch(function(err){
            console.log(err);
            alert("注册失败，可能信息已被注册");
          });
        }
      }
    },
    //页面加载读取题目数量
    mounted () {
      this.num1 = Math.ceil(this.number*0.75);
      this.num2 = Math.ceil(this.number*0.15);
      this.num3 = this.number - this.num1 - this.num2;
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('../../assets/body_bg.jpg') no-repeat 0 0;
    background-attachment: fixed;
    .home__container {
      width: 1024px;
      margin: 0 auto;
    }
    .home__link {
      padding: 20px 10px;
      height: 200px;
      line-height: 200px;
      a {
        font-size: 28px;
        color: #000;
        text-decoration: none;
      }
    }
    .home__test {
      position: relative;
      height: 200px;
      text-align: right;
      a {
        position: relative;
        top: 190px;
        font-size: 18px;
        color: #000;
        text-decoration: none;
        &:hover {
          color: red;
        }
      }
    }
    .home__logo {
      margin-top: 40px;
      width: 100%;
      box-shadow: 7px 7px 10px #888888;
    }
    .test__num {
      margin-top: 15px;
    }
  }
</style>
