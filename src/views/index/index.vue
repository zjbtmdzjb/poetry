<template>
  <el-row :gutter="20">
    <el-col :span="9" class="col">
      <admin-info></admin-info>
    </el-col>
    <el-col :span="5" class="col">
      <count-info bgColor="#409EFF" icon="tasks" :number="questionNum" type="试卷总题数" update="true" ></count-info>
    </el-col>
    <el-col :span="5" class="col">
      <count-info bgColor="#67C23A" icon="user-plus" :number="studentNum" type="学生总数"></count-info>
    </el-col>
    <el-col :span="5" class="col">
      <count-info bgColor="#EB9E05" icon="edit" :number="poetryNum" type="题目总数" ></count-info>
    </el-col>
    <el-col :span="15" class="col col__right">
      <grade-info></grade-info>
    </el-col>
    <el-col :span="9" class="col">
      <task-info></task-info>
    </el-col>
    <el-col :span="9" class="col">
      <dev-info></dev-info>
    </el-col>
  </el-row>
</template>

<script>
  import AdminInfo from '../../views/index/adminInfo'
  import CountInfo from '../../views/index/countInfo'
  import TaskInfo from '../../views/index/taskInfo'
  import DevInfo from '../../views/index/devInfo'
  import GradeInfo from '../../views/index/gradeInfo'
  import axios from 'axios'

  export default {
    
    data(){
      return{
        questionNum:'',
        studentNum:'',
        poetryNum:''
      }
    },
    components: {
      AdminInfo,
      CountInfo,
      TaskInfo,
      DevInfo,
      GradeInfo
    },
    mounted () {
      this.questionNum = 40;
      this.studentNum = 412;
      this.poetryNum = 120;
      axios.get('http://localhost:7001/global/index')
      .then(function(res){
        if(res.status == true){
          this.questionNum = res.questionNum;
          this.studentNum = res.studentNum;
          this.poetryNum = res.poetryNum;
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .col {
    margin-bottom: 15px;
  }
  .col__right {
    float: right;
  }
</style>
