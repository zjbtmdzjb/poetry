<template>
  <el-card class="task" >
    <div slot="header" class="clearfix">
      <span>待办事项</span>
      <el-button style="float: right; padding: 3px 0" type="text"><i class="fa fa-check-square-o"></i></el-button>
    </div>
    <div><el-checkbox v-model="checked1" @change="upon">更改试卷总题数</el-checkbox></div>
    <div><el-checkbox v-model="checked2" @change="upon">添加学生</el-checkbox></div>
    <div><el-checkbox v-model="checked3" @change="upon">删除过期学生</el-checkbox></div>
    <div><el-checkbox v-model="checked4" @change="upon">更新学生信息</el-checkbox></div>
  </el-card>
</template>

<script>
export default {
  data() {
    return{
      checked1:false,
      checked2:false,
      checked3:false,
      checked4:false
    }
  },
  methods:{
    upon:function(){
      
      if(this.checked1 == true){
        localStorage.setItem("changeQuestionNum",true);
      }else if(this.checked1 == false){
        localStorage.removeItem("changeQuestionNum",false);
      }
      if(this.checked2 == true){
        localStorage.setItem("addStudent",true);
      }else if(this.checked2 == false){
        localStorage.removeItem("addStudent");
      }
      if(this.checked3 == true){
        localStorage.setItem("deleteStudent",true);
      }else if(this.checked3 == false){
        localStorage.removeItem("deleteStudent");
      }
      if(this.checked4 == true){
        localStorage.setItem("updateStudent",true);
      }else if(this.checked4 == false){
        localStorage.removeItem("updateStudent");
      }
    },

    getlocal:function(){
      if(localStorage.getItem("changeQuestionNum") == "true"){
        this.checked1 = true;
      }
      if(localStorage.getItem("addStudent") == "true"){
        this.checked2 = true;
      }
      if(localStorage.getItem("deleteStudent") == "true"){
        this.checked3 = true;
      }
      if(localStorage.getItem("updateStudent") == "true"){
        this.checked4 = true;
      }
    }
  },
  mounted(){
    this.getlocal();
  }
}
</script>

<style lang="scss" scoped>
  .task {
    height: 180px;
    color: #657180;
    box-shadow: none;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
  }
</style>
