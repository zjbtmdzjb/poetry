<template>
  <el-card class="dev">
    <div slot="header" class="clearfix">
      <span>系统信息</span>
      <el-button style="float: right; padding: 3px 0" type="text"><i class="fa fa-server"></i></el-button>
    </div>
    <div>数据库：MySql</div>
    <div>服务器：Windows Server</div>
    <div>开发人员：孙梦海 曹浩</div>
  </el-card>
</template>

<script>

</script>

<style lang="scss" scoped>
  .dev {
    height: 160px;
    color: #657180;
    box-shadow: none;
    &:hover {
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    }
  }
</style>
