<template>
  <el-row>
    <el-form :inline="true" :model="formInline" size="small" class="administor__form">
      <el-form-item class="form__item">
        <el-input v-model="formInline.user" placeholder="管理员用户名"></el-input>
      </el-form-item>
      <el-form-item class="form__item">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addDialogVisible = true">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      :data="adminData"
      tooltip-effect="dark"
      style="width: 100%; border: 1px solid rgb(230, 235, 245); border-bottom: none;"
      header-row-style="color: #000000; background-color: #eef1f6;"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        type="index"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名"
        width="150">
      </el-table-column>
      <el-table-column
        prop="privilege"
        label="身份">
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            size="small"
            type="primary"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row class="administor__footer">
      <el-button
        size="small"
        type="danger"
        @click="handleDelete(scope.$index, scope.row)">批量删除</el-button>
      <el-pagination
        @size-change="handleSizeChange"
        background
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next"
        :total="40"
        class="administor__page">
      </el-pagination>
    </el-row>

    <!-- 新增界面 -->
    <el-dialog
      title="添加管理员"
      :visible.sync="addDialogVisible"
      width="50%">
      <el-form ref="form" :model="form" label-width="70px" label-position="right">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="addDialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="addAdministor(form)">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        headertitle:'管理员',
        addDialogVisible: false,
        formInline: {
          user: '',
          region: ''
        },
        form: {
          name:'',
          password:''
        },
        adminData: [{
          name: '单栖情绪',
          privilege: '普通管理员'
        }, {
          name: '单栖情绪',
          privilege: '普通管理员'
        }, {
          name: '单栖情绪',
          privilege: '普通管理员'
        }, {
          name: '单栖情绪',
          privilege: '普通管理员'
        }, {
          name: '单栖情绪',
          privilege: '普通管理员'
        }, {
          name: '单栖情绪',
          privilege: '普通管理员'
        }, {
          name: '单栖情绪',
          privilege: '普通管理员'
        }, {
          name: '单栖情绪',
          privilege: '普通管理员'
        }, {
          name: '单栖情绪',
          privilege: '普通管理员'
        }, {
          name: '单栖情绪',
          privilege: '普通管理员'
        }]
      }
    },
    methods: {
      addAdministor(formName){
        if(this.form.name == ''){
          return;
        }
        if(this.form.password == ''){
          return;
        }
        axios.post('http://localhost:7001/Admin/Reg',{
            name:this.form.name,
            password:this.form.password
          })
          .then(function(res){
            console.log(res);
            if(res.status = true){
              alert("添加成功");
            }
          })
          .catch(function(err){
            console.log(err);
            alert("添加失败，可能信息已被注册");
          });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .administor__form {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #eef1f6;
    .form__item {
      margin-bottom: 0px;
    }
  }
  .administor__footer {
    padding: 10px;
    margin-top: 10px;
    background-color: #eef1f6;
  }
  .administor__page {
    float: right;
  }
</style>