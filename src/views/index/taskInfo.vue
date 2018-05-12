<template>
  <el-card class="task">
    <div slot="header" class="clearfix">
      <span>待办事项</span>
      <el-button style="float: right; padding: 3px 0" type="text"><i class="fa fa-check-square-o"></i></el-button>
    </div>
    <div><el-checkbox v-model="checked">更改试卷总题数</el-checkbox></div>
    <div><el-checkbox v-model="checked">添加学生</el-checkbox></div>
    <div><el-checkbox v-model="checked">删除过期学生</el-checkbox></div>
    <div><el-checkbox v-model="checked">更新学生信息</el-checkbox></div>
  </el-card>
</template>

<script>

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
