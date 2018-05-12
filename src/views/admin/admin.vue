<template>
  <el-container direction="vertical">
    <head-top></head-top>
    <el-container class="main">
      <side-bar></side-bar>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="main__bread">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{headtitle}}</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import HeadTop from '../../components/header/header'
  import SideBar from '../../components/sideBar/sideBar'

  export default {
    name: 'Index',
    components: {
      HeadTop,
      SideBar,
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
    .main__bread {
      margin-bottom: 20px;
    }
  }
</style>
