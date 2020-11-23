<template>
  <div>
    基本信息
  </div>
</template>

<script>

export default {
  name: "base",
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
