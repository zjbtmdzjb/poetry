<template>
  <el-header>
    <el-row>
      <el-col :span="10" class="header__logo">
        <i class="fa fa-leaf"></i> &nbsp;越韵古诗
      </el-col>
      <el-col :span="10" class="header__tool">
        <i class="fa fa-navicon"></i>
      </el-col>
      <el-col :span="4" class="header__user">
        <el-dropdown>
          <span class="el-dropdown-link">
            王老师 <img src="https://avatars0.githubusercontent.com/u/18280125?s=460&v=4" alt="用户图像" class="user__avatar">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item  divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .el-header {
    padding-left: 0;
    padding-right: 0;
    line-height: 60px;
    color: #fff;
    background-color: #409EFF;
    .header__logo {
      box-sizing: border-box;
      width: 230px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238,241,146,0.3);
      border-right-width: 1px;
      border-right-style: solid;
    }
    .header__tool {
      padding: 0 20px;
      width: 14px;
      cursor: pointer;
    }
    .header__user {
      float: right;
      padding-right: 30px;
      text-align: right;
      .el-dropdown-link {
        color: #fff;
        cursor: pointer;
        .user__avatar {
          float: right;
          margin: 10px 0px 10px 10px;
          width: 40px;
          height: 40px;
          border-radius: 20px;
        }
      }
    }
  }
</style>
