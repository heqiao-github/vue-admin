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
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main-app{
    padding: 20px 50px;
}
</style>
