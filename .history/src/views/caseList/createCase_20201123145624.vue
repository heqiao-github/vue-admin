<template>
  <div>
    <main-app>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">案件列表</el-breadcrumb-item>
        <el-breadcrumb-item>新建</el-breadcrumb-item>
      </el-breadcrumb>
    </main-app>
  </div>
</template>

<script>
import MainApp from "@/caseListLayout/mainApp";
export default {
  name: "create-case",
  components: {
    MainApp
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
