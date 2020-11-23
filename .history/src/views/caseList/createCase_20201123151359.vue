<template>
  <div>
    <main-app>
      <div class="main-app">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/caseList' }"
            >案件列表</el-breadcrumb-item
          >
          <el-breadcrumb-item>新建案件</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
          <el-steps :active="active" finish-status="success">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
          </el-steps>
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
      </div>
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
    return {
        active:
    };
  },
  methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
  }
};
</script>

<style lang="scss" scoped>
.main-app {
  padding: 20px 50px;
}
</style>
