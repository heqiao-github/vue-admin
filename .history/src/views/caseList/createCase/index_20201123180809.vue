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
            <el-step title="步骤 1" description="基本案情录入">
                
            </el-step>
            <el-step title="步骤 2" description="嫌疑人/关联人信息录入">
            </el-step>
            <el-step title="步骤 3" description="非调单资料上传"></el-step>
          </el-steps>
          <router-view></router-view>
          <el-button style="margin-top: 12px;" @click="goToList">完成</el-button>
          <el-button v-if="active !==2 " style="margin-top: 12px;" @click="next">下一步</el-button>
          <el-button v-else style="margin-top: 12px;" @click="prev">上一步</el-button>

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
        active:0
    };
  },
  methods: {
    // 下一步
      next() {
        this.active++;
        console.log(this.active)
        
        
      },
      chooseRouter(active){
switch(this.active){
          case 0 : this.$router.push('/createCase');break;
          case 1 : this.$router.push('/createCase/person');break;
          case 2 : this.$router.push('/createCase/dataUpload');break;
          default: this.$router.push('/');break;
        }
      }
      // 上一步
      prev(){
        this.active--;
      },
      goToList(){
        this.$router.push('/')
      }
  }
};
</script>

<style lang="scss" scoped>
.main-app {
  padding: 20px 50px;
}
</style>
