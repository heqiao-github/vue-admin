<template>
  <div>
    <main-app>
      <div class="main-app">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>案件列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
          <el-col :span="16"></div></el-col>
          <el-col :span="8"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
        </el-row>
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
}
</style>
