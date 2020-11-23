<template>
  <div>
    <main-app>
      <div class="main-app">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>案件列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row class="list-header">
          <el-col :span="16">案件列表</el-col>
          <el-col :span="8">
            <el-button type="primary" size="mini">新建案件</el-button>
            <el-button type="primary" size="mini">删除案件</el-button>
          </el-col>
        </el-row>
        <div class="search">
          <el-input placeholder="请输入内容" v-model="inputs">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="案件名称" width="180">
          </el-table-column>
          <el-table-column label="案件编号" width="180">
          </el-table-column>
          <el-table-column label="创建时间" width="180">
          </el-table-column>
          <el-table-column label="数据条数" width="180">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >数据治理  >></el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
          <el-table-column label="授权">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </main-app>
  </div>
</template>

<script>
import MainApp from "@/caseListLayout/mainApp";
export default {
  name: "caseList",
  components: {
    MainApp
  },
  data() {
    return {
      inputs: "heqiao",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.main-app {
  padding: 50px;
  .list-header {
    height: 38px;
    background: gray;
    .el-col {
      display: flex;
      align-items: center;
      height: 100%;
      padding-left: 20px;
    }
  }

  .search {
    padding: 18px 382px;
  }
}
</style>
