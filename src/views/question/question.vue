<template>
  <el-row>
    <el-form :inline="true" :model="formInline" size="small" class="question__form">
      <el-form-item class="form__item">
        <el-input v-model="formInline.user" placeholder="题目名称"></el-input>
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
        prop="type"
        label="题目类型"
        width="120">
      </el-table-column>
      <el-table-column
        prop="content"
        label="题目内容"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="answer"
        label="题目答案"
        width="100">
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

    <el-row class="question__footer">
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
        class="question__page">
      </el-pagination>
    </el-row>

    <!-- 新增界面 -->
    <el-dialog
      title="添加题目"
      :visible.sync="addDialogVisible"
      width="50%">
      <el-form ref="form" :model="form" label-width="70px" label-position="right">
        <el-form-item label="题目类型">
          <el-select v-model="form.region" placeholder="请选择题目类型">
            <el-option label="选择题" value="shanghai"></el-option>
            <el-option label="判断题" value="beijing"></el-option>
            <el-option label="欣赏题" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="题目内容">
          <el-input type="textarea" :autosize="{ minRows: 3}" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="选项 A">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选项 B">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选项 C">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选项 D">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="题目附件">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
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
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }, {
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }, {
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }, {
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }, {
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }, {
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }, {
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }, {
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }, {
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }, {
          type: '选择题',
          content: '像我这样优秀的人，本该灿烂过一生，怎么二十多年到头来，还在人海里浮沉',
          answer: 'A'
        }]
      }
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .question__form {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #eef1f6;
    .form__item {
      margin-bottom: 0px;
    }
  }
  .question__footer {
    padding: 10px;
    margin-top: 10px;
    background-color: #eef1f6;
  }
  .question__page {
    float: right;
  }
</style>