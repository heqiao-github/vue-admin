<template>
  <div>
    <main-app>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">案件</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
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
