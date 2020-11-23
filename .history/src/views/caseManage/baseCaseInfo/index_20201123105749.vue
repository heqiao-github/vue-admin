<template>
  <div class="dashboard-container">
    <div class="dashboard-text">案件名称：{{"雅安3.3走私案件"}}</div>
    <nav-menu content="xxxx案件基本信息" size="mini" operate="修改"></nav-menu>
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
