<template>
  <div>
    <!-- SOURCE -->
    <div ref="printMe" style="padding: 10px; background: #f5da55">
      <h1 style="color: #000; ">Print me!</h1>
      <button>截图</button>
    </div>
    <!-- OUTPUT -->
    <img :src="output">
  </div>
</template>

<script>
export default {
  data() {
    return {
      output: null
    }
  },
  methods: {
    async print() {
      const el = this.$refs.printMe;
      const options = {
        type: 'dataURL',
        scale: scale,
        canvas: canvas,
        width: width,
        height: height ,
        backgroundColor:'transparent'
      }
      this.output = await this.$html2canvas(el, options);
    }
  },
  mounted() {
    this.print()
  }
}
</script>