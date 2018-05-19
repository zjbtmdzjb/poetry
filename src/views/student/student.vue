<template>
  <el-row>
    <el-form :inline="true" :model="formInline" size="small" class="student__form">
      <el-form-item class="form__item">
        <el-input v-model="formInline.name" placeholder="学生姓名"></el-input>
      </el-form-item>
      <el-form-item class="form__item">
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click="addDialogVisible = true">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"
      :data="tableData3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
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
        width="100">
      </el-table-column>
      <el-table-column
        type="expand"
        label="展开成绩"
        width="100">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand" v-for="(grade,index) in props.row.grade">
            <el-form-item>
              <span>第{{ grade[2] }}次测验</span>
            </el-form-item>
            <el-form-item label="考试时间">
              <span>{{ grade[1] }}</span>
            </el-form-item>
            <el-form-item label="考试分数">
              <span>{{ grade[0] }}</span>
            </el-form-item>
          </el-form>
        </template>
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
      <el-pagination
        @size-change="handleSizeChange"
        background
        @current-change="handleCurrentChange"
        :current-page="currentpage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next"
        :total="tableData3.length"
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
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="form.class"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="addDialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="addStudent">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 编辑界面 -->
    <el-dialog
      title="编辑学生"
      :visible.sync="editStudent"
      width="50%">
      <el-form ref="form" :model="editform" label-width="70px" label-position="right">
        <el-form-item label="学号">
          <el-input v-model="editform.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="editform.name"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="editform.class"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="addDialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="editsubmit">确 定</el-button>
      </span>
    </el-dialog>
  </el-row>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        addDialogVisible: false,
        currentPage:1,
        pagesize:10,
        formInline: {
          name:''
        },
        form: {
          id:'',
          name:'',
          class:''
        },
        editform:{
          id:'',
          name:'',
          class:''
        },
        tableData3: [{
          id: '2014317200405',
          name: '孙梦海',
          class: '计科1404',
          grade: [ 
            [89, "2017-12-1", 1],  // 第一次测验
            [92, "2018-2-12", 2]   // 第二次测验
          ]
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
        }],
        oldtableData:[]
      }
    },
    methods: {
      search:function(){
        console.log(this.formInline.name);
        if(this.formInline.name == ''){
          this.tableData3 = this.oldtableData;
        }else{
          this.tableData3 = this.oldtableData.filter(item => (~item.name.indexOf(this.formInline.name)));
        }
      },
      addStudent(){
        axios.post("http://localhost:7001/Student/Add",{
          name:this.form.name,
          id:this.form.id,
          class:this.form.class
        })
        .then(function(res) {
          console.log(res);
          if(res.status == true){
            alert('添加成功');
          }
        })
        .catch(function(err){
          console.log(err);
          alert("添加失败");
        });
      },
      handleEdit(index, row){
        console.log(row);
        this.editStudent = true;
        this.editform.id = row.id;
        this.editform.name = row.name;
        this.editform.class = row.class;
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
      },
      handleDelete(index, row){
        console.log(row);
        axios.post("http://localhost:7001/Student/Delete",{
          id:row.id,
        })
        .then(function(res) {
          console.log(res);
          if(res.status == true){
            alert('删除成功');
          }
        })
        .catch(function(err){
          console.log(err);
          alert("删除失败");
        });
      },
      editsubmit(){
        axios.post("http://localhost:7001/Student/Update",{
          name:this.editform.name,
          id:this.editform.id,
          class:this.editform.class
        })
        .then(function(res) {
          console.log(res);
          if(res.status == true){
            alert("修改成功");
          }
        })
        .catch(function(err){
          console.log(err);
          alert("修改失败");
        });
      }
    },
    mounted(){
        var studentArray = new Array({
          name: '张三',
          id: '123456789',
          class: '2-3',
          grade: [ 
            [89, "2017-12-1", 1],  // 第一次测验
            [92, "2018-2-12", 2]   // 第二次测验
          ]
        });
        var studentNode = new Array({
          name: '张三',
          id: '123456789',
          class: '2-3',
          grade: [ 
            [89, "2017-12-1", 1],  // 第一次测验
            [92, "2018-2-12", 2]   // 第二次测验
          ]
        });
        studentArray.push.apply(studentArray,studentNode);
        this.tableData3 = studentArray;
        this.oldtableData = this.tableData3;
        axios.get("http://localhost:7001/StudentList")
        .then(function(res) {
          console.log(res);
          if(res.status == true){
            for(var i=0;i<res.data.length;i++){
              studentNode = res.data[i];
              studentArray.push.apply(studentArray,studentNode);
            }
            this.tableData3 = studentArray;
          }
        });
    }
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