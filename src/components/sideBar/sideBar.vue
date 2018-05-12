<template>
  <el-aside width="230px">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="index"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#eef1f6"
      text-color="#48576a"
      :router="true"
      active-text-color="#20a0ff">
      <el-menu-item index="index">
        <i class="fa fa-tachometer fa-lg"></i>
        <span slot="title">系统首页</span>
      </el-menu-item>
      <el-submenu index="questionManage">
        <template slot="title">
          <i class="fa fa-folder-o fa-lg"></i>
          <span slot="title">题库管理</span>
        </template>
        <el-menu-item index="question">
          <span slot="title">题目列表</span>
        </el-menu-item>
        <!-- <el-menu-item index="2-2">增加题目</el-menu-item> -->
      </el-submenu>
      <el-submenu index="studentManage">
        <template slot="title">
          <i class="fa fa-user-o fa-lg"></i>
          <span slot="title">学生管理</span>
        </template>
        <el-menu-item index="student">学生列表</el-menu-item>
      </el-submenu>
      <el-submenu index="adminManage">
        <template slot="title">
          <i class="fa fa-id-card-o fa-lg"></i>
          <span slot="title">管理员</span>
        </template>
        <el-menu-item index="administor">管理员列表</el-menu-item>
        <el-menu-item index="self">个人中心</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: true
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    height: 100%;
  }
  .fa {
    margin-right: 10px;
  }
</style>