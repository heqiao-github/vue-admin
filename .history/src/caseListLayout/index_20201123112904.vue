<template>
  <div>
    <navbar></navbar>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">案件列表</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import Navbar from "@/layout/components/Navbar";
export default {
  name: "CaseListLayout",
  components: {
    Navbar
  }
};
</script>
