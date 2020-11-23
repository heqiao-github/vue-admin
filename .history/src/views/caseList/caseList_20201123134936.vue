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
        <div>
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
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
}
</style>
