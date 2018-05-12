<template>
  <el-row :gutter="20">
    <el-col :span="9" class="col">
      <admin-info></admin-info>
    </el-col>
    <el-col :span="5" class="col">
      <count-info bgColor="#409EFF" icon="tasks" number="50" type="试卷总题数" update="true" ></count-info>
    </el-col>
    <el-col :span="5" class="col">
      <count-info bgColor="#67C23A" icon="user-plus" number="412" type="学生总数"></count-info>
    </el-col>
    <el-col :span="5" class="col">
      <count-info bgColor="#EB9E05" icon="edit" number="250" type="题目总数" ></count-info>
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

  export default {
    components: {
      AdminInfo,
      CountInfo,
      TaskInfo,
      DevInfo,
      GradeInfo
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
