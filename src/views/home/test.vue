<template>
  <el-row class="test">
    <el-row class="container">
      <h1>越韵古诗测试试卷
        <a href="#">当前用户:{{username}}</a>
      </h1>

      <el-row class="test__question">
        <section>
          <h3>一、选择题（共5题，每题5分。每题只有一个答案是正确的，请从四个备选答案中选出正确选项）</h3>
          <el-row v-for="(choice,index) in choices" :key="index" class="question__item">
            <h4  :id="'choiceOrder'+index">{{index+1}}.{{choice.question}}</h4>
            <el-radio-group v-model="choiceradio[index]" class="item" >
              <el-radio label="1">{{choice.option[0]}}</el-radio>
              <el-radio label="2">{{choice.option[1]}}</el-radio>
              <el-radio label="3">{{choice.option[2]}}</el-radio>
              <el-radio label="4">{{choice.option[3]}}</el-radio>
            </el-radio-group>
          </el-row>
        </section>

        <section>
          <h3>二、判断题（共5题，每题5分。请根据题目内容选择正确或者错误）</h3>
          <el-row v-for="(judge,index) in judges" :key="index" class="question__item">
            <h4 :id="'judgeOrder'+index">{{index+1}}. {{judge.question}}</h4>
            <el-radio-group v-model="judgeradio[index]" class="item">
              <el-radio label="1">正确</el-radio>
              <el-radio label="0">错误</el-radio>
            </el-radio-group>
          </el-row>
        </section>

        <section>
          <h3>三、欣赏题（共5题，每题5分。请欣赏完作品后完成选项，每题只有一个答案是正确的，请从四个备选答案中选出正确选项）</h3>
          <el-row v-for="(admiring,index) in admirings" :key="index" class="question__item">
            <h4 :id="'admiringOrder'+index">{{index+1}}.{{admiring.question}}</h4>
            <el-radio-group v-model="admiringradio[index]" class="item">
              <el-radio :label="1">{{admiring.option[0]}}</el-radio>
              <el-radio :label="2">{{admiring.option[1]}}</el-radio>
              <el-radio :label="3">{{admiring.option[2]}}</el-radio>
              <el-radio :label="4">{{admiring.option[3]}}</el-radio>
            </el-radio-group>
          </el-row>

        </section>

        <el-row  class="test__handle">
          <el-button type="primary" @click="submit">提交试卷</el-button>
        </el-row>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
import router from '../../router/router'
import axios from 'axios'
export default {
  data () {
    return {
      fontcolor0:{
        color:'red'
      },
      username:'',
      id:'',
      choiceradio:[],
      judgeradio:[],
      admiringradio:[]
    }
  },
  created:function(){
    for(var i=0;i<this.choices.length;i++){
      this.choiceradio[i] = 'choiceradio' + i;
    }
    for(var i=0;i<this.judges.length;i++){
      this.judgeradio[i] = 'judgeradio' + i;
    }
    for(var i=0;i<this.admirings.length;i++){
      this.admiringradio[i] = 'admiringradio' + i;
    }
  },
  computed:{
    choices:function(){
      if(sessionStorage.getItem('choice') == null){
        return this.$route.params.choice;
      }
      return JSON.parse(sessionStorage.getItem('choice'));
    },
    judges:function(){
      if(sessionStorage.getItem('judge') == null){
        return this.$route.params.judge;
      }
      return JSON.parse(sessionStorage.getItem('judge'));
    },
    admirings:function(){
      if(sessionStorage.getItem('admiring') == null){
        return this.$route.params.admiring;
      }
      return JSON.parse(sessionStorage.getItem('admiring'));
    }
  },
  methods:{
    submit:function(){
      var check = /^\d$/;
      for(var i=0;i<this.choiceradio.length;i++){
        if(!check.test(this.choiceradio[i])){
          alert('选择题未填写完整');
          return;
        }
      }
      for(var i=0;i<this.judgeradio.length;i++){
        if(!check.test(this.judgeradio[i])){
          alert('判断题未填写完整');
          return;
        }
      }
      for(var i=0;i<this.admiringradio.length;i++){
        if(!check.test(this.admiringradio[i])){
          alert('欣赏题未填写完整');
          return;
        }
      }
      var answers = this.choiceradio.concat(this.judgeradio.concat(this.admiringradio));
      var selectarr = new Array('0','A','B','C','D');
      var judgearr = new Array('F','T');
      for(var i=0;i<answers.length;i++){
        console.log(answers[i]);
      }
      axios.post('http://localhost:7001/poetry/grade',{
            id:this.id,
            answer:answers
          })
          .then(function(res){
            if(res.status = true){
              var i,j,k;
              var wronganswer,answerid;
              //显示错误题目，并标注正确答案
              for(i=0;i<this.choiceradio.length;i++){
                if(this.choiceradio[i] != res.answer[i]){
                  answerid = 'choiceOrder' + i;
                  wronganswer = document.getElementById(answerid);
                  wronganswer.style.color = 'red';
                  wronganswer.innerHTML += '正确答案：'+ selectarr[res.answer[i]];
                }
              }
              for(j=0;j<this.judgeradio.length;j++){
                if(this.judgeradio[j] != res.answer[i+j]){
                  answerid = 'judgeOrder' + j;
                  wronganswer = document.getElementById(answerid);
                  wronganswer.style.color = 'red';
                  wronganswer.innerHTML += '正确答案：'+ judgearr[res.answer[i+j]];
                }
              }
              for(k=0;k<this.admiringradio.length;k++){
                if(this.admiringradio[k] != res.answer[i+j+k]){
                  answerid = 'admiringOrder' + k;
                  wronganswer = document.getElementById(answerid);
                  wronganswer.style.color = 'red';
                  wronganswer.innerHTML += '正确答案：'+ selectarr[res.answer[i+j+k]];
                }
              }
              var info = "本次测试得分为：" + res.data.grade;
              alert(info);
              
            }
          })
          .catch(function(err){
            console.log(err);
            alert("提交失败，请检查信息");
          });
    },
  },
  mounted () {
    console.log(sessionStorage);
    if(sessionStorage.getItem('chocie') == null){
      var choicestr = JSON.stringify(this.$route.params.choice);
      var judgestr = JSON.stringify(this.$route.params.judge);
      var admiringstr = JSON.stringify(this.$route.params.admiring);
      sessionStorage.setItem("choice",choicestr);
      sessionStorage.setItem("judge",judgestr);
      sessionStorage.setItem("admiring",admiringstr);
      console.log(sessionStorage);
    }
    this.username = 'a';
    this.id = '1';
  }
}
</script>

<style lang="scss" scoped>
  .test {
    position: fixed;
    overflow: auto;
    width: 100%;
    height: 100%;
    background: url('../../assets/body_bg.jpg') no-repeat 0 0;
    background-attachment: fixed;
    .container {
      margin: 0 auto;
      width: 1024px;
      h1 {
        position: relative;
        margin: 10px 0;
        padding: 30px 0;
        text-align: center;
        a {
          position: absolute;
          right: 10px;
          bottom: 0;
          color: #657180;
          font-size: 15px;
          text-decoration: none;
          &:hover {
            color: red;
          }
        }
      }
      .test__question {
        width: 100%;
        border: 1px solid #712704;
        border-radius: 5px;
        margin-bottom: 50px;
        padding: 30px;
        box-sizing: border-box;
        background-color: white;
        .question__item {
          padding: 0 20px;
          h4 {
            margin: 10px 0;
          }
          .item {
            margin: 10px 20px;
          }
        }
        .test__handle {
          margin: 40px 0 20px;
          text-align: center;
        }
      }
    }
  }
</style>
