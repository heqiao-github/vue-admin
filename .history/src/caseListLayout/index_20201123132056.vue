<template>
  <div>
    <main-app>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>案件列表</el-breadcrumb-item>
      </el-breadcrumb>
    </main-app>
  </div>
</template>

<script>
import Navbar from "@/layout/components/Navbar";
import MainApp from "@/caseListLayout/mainApp";
export default {
  name: "CaseListLayout",
  components: {
    Navbar,
    MainApp
  }
};
</script>
