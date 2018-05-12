<template>
  <el-row>
    <el-form :inline="true" :model="formInline" size="small" class="student__form">
      <el-form-item class="form__item">
        <el-input v-model="formInline.user" placeholder="学生姓名"></el-input>
      </el-form-item>
      <el-form-item class="form__item">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="addDialogVisible = true">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      :data="tableData3"
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
        prop="id"
        label="学号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="class"
        label="班级">
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

    <el-row class="student__footer">
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
        class="student__page">
      </el-pagination>
    </el-row>

    <!-- 新增界面 -->
    <el-dialog
      title="添加学生"
      :visible.sync="addDialogVisible"
      width="50%">
      <el-form ref="form" :model="form" label-width="70px" label-position="right">
        <el-form-item label="学号">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="addDialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="addDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        addDialogVisible: false,
        formInline: {
          user: '',
          region: ''
        },
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableData3: [{
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }, {
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }, {
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }, {
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }, {
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }, {
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }, {
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }, {
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }, {
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }, {
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404'
        }]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .student__form {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #eef1f6;
    .form__item {
      margin-bottom: 0px;
    }
  }
  .student__footer {
    padding: 10px;
    margin-top: 10px;
    background-color: #eef1f6;
  }
  .student__page {
    float: right;
  }
</style>