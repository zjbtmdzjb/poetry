<template>
  <el-card class="admin"  :body-style="{ padding: '0px 20px' }">
    <el-row style="margin: 30px 0 30px 0;">
      <el-col :span="10" class="admin__avatar">
        <img src="https://avatars0.githubusercontent.com/u/18280125?s=460&v=4" alt="用户图像">
      </el-col>
      <el-col :span="14" class="admin__name">
        Admin
      </el-col>
    </el-row>
    <el-row class="admin__ip">
      登录权限：普通管理员<br/>
      登录 IP：192.168.1.1
    </el-row>
  </el-card>
</template>

<script>
</script>

<style lang="scss" scoped>
  .admin {
    width: 100%;
    height: 210px;
    color: #657180;
    box-shadow: none;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
    .admin__avatar {
      width: 80px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .admin__name {
      padding: 0 0 0 30px;
      line-height: 80px;
      font-size: 30px;
      // font-weight: bold;
      color: #409EFF;
    }
    .admin__ip {
      padding: 10px 5px;
      line-height: 20px;
      border-top: 2px solid #dcdcdc;
    }
  }
</style>
