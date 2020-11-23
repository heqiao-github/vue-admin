<template>
  <div>
    基本信息
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
        active:0
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
