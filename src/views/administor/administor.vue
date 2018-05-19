<template>
  <el-row>
    <el-form :inline="true" :model="formInline" size="small" class="administor__form">
      <el-form-item class="form__item">
        <el-input v-model="formInline.admin" placeholder="管理员用户名"></el-input>
      </el-form-item>
      <el-form-item class="form__item">
        <el-button type="primary" @click="search">查询</el-button>
        <el-button type="primary" @click="addDialogVisible = true">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      ref="multipleTable"

      :data="adminData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      tooltip-effect="dark"
      style="width: 100%; border: 1px solid rgb(230, 235, 245); border-bottom: none;"
      header-row-style="color: #000000; background-color: #eef1f6;"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="index"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="用户名">
      </el-table-column>
    </el-table>

    <el-row class="administor__footer">
      <el-pagination
        @size-change="handleSizeChange"
        background
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next"
        :total="adminData.length"
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
        currentPage:1,
        pagesize:10,
        formInline: {
          admin:''
        },
        form: {
          name:'',
          password:''
        },
        adminData: [{
          id:'1',
          name: '单栖情绪',
        },{
          id:'1',
          name: '单栖情绪',
        },{
          id:'1',
          name: '单栖情绪',
        },{
          id:'1',
          name: '单栖情绪',
        },{
          id:'1',
          name: '单栖情绪',
        },{
          id:'1',
          name: '单栖情绪',
        },{
          id:'1',
          name: '单栖情绪',
        },{
          id:'1',
          name: '单栖情绪',
        },{
          id:'1',
          name: '单栖情绪',
        },{
          id:'1',
          name: '单栖情绪',
        },],
        oldadminData:[]
      }
    },
    methods: {
      search:function(){
        console.log(this.formInline.admin);
        if(this.formInline.admin == ''){
          this.adminData = this.oldadminData;
        }else{
          this.adminData = this.oldadminData.filter(item => (~item.name.indexOf(this.formInline.admin)));
        }
      },
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
      },
      handleEdit(index, row){
        console.log(row);
        this.editAdmin = true;
        this.editform.id = row.id;
        this.editform.name = row.name;
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
      }

    },
    mounted(){
      var adminArray = new Array({
          name: '情绪',
          id: '1',
        });
        var adminNode = new Array({
          name: '情绪',
          id: '2',
        });
        for(var i=0;i<100;i++){
          adminArray.push.apply(adminArray,adminNode);
        }
        
        this.adminData = adminArray;
        this.oldadminData = this.adminData;
        axios.get("http://localhost:7001/AdminList")
        .then(function(res) {
          console.log(res);
          if(res.status == true){
            for(var i=0;i<res.data.length;i++){
              adminNode = res.data[i];
              adminArray.push.apply(adminArray,adminNode);
            }
            this.adminData = adminArray;
          }
        });
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