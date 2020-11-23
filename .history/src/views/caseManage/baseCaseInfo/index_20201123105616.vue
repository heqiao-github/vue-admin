<template>
  <div class="dashboard-container">
    <div class="dashboard-text">案件名称：{{"雅安3.3走私案件"}}</div>
    <div>
      <header><span>{{"XXXX"}}案件基本信息</span><el-button type="primary" size="mini">修改</el-button></header>
    </div>
    <nav-m
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NavMenu from '@/components/right-menu'

export default {
  name: 'BaseCaseInfo',
  components: {
    NavMenu
  }
  
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
