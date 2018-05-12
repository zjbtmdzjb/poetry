<template>
  <el-form ref="form" :model="form" label-width="80px" class="self__form">
    <el-form-item label="昵称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="身份">
      <el-select v-model="form.region" placeholder="请选择管理员身份">
        <!-- <el-option label="超级管理员" value="shanghai"></el-option> -->
        <el-option label="普通管理员" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即更新</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .self__form {
    margin-top: 30px;
    width: 50%;
  }
</style>
