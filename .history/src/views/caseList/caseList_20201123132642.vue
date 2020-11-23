<template>
  <div>
    <main-app>
        
    </main-app>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>案件列表</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import MainApp from '@/caseListLayout'
export default {
  name: "caseList",
  components: {
    MainApp
  }
};
</script>
