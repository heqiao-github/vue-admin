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
          <el-table-column label="案件名称" width="180" class="caseName">
            <template slot-scope="scope">
                {{ scope.row.caseName }}</template>
          </el-table-column>
          <el-table-column label="案件编号" width="180">
            <template slot-scope="scope">{{ scope.row.caseNum }}</template>
          </el-table-column>
          <el-table-column label="创建时间" width="180">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column label="数据条数" width="180">
            <template slot-scope="scope">{{ scope.row.total }}</template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >数据治理 >></el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >分析研判 >></el-button
              >
            </template>
          </el-table-column>
          <el-table-column label="授权">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >授权</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="2"
          >
          </el-pagination>
        </div>
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
          date: "2020/11/08 19:16",
          caseName: "名称1",
          caseNum: "XXXXXXXX",
          total: 500
        },
        {
          date: "2020/11/08 19:16",
          caseName: "名称2",
          caseNum: "XXXXXXXX",
          total: 500
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
  .caseName{
      cursor: pointer;
      &:hover{
          color: blue;
      }
  }
}
</style>
