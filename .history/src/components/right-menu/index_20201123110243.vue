<template>
    <div class="nav-right">
        <header>
            <span>{{content}}</span>
            <el-button type="primary" :size="size">{{operate}}</el-button>
        </header>
    </div>
</template>

<script>
export default {
    name: "nav-right",
     props:{
         content: {
             type: String,
             default:''
         },
         operate:{
             type: String,
             default:''
         },
         size: {
             type: String,
             defalut: 'mini'
         }
     }
}
</script>
<style lang="scss" scoped>
    .nav-right{
        height: 38px;
        background: gray;
        
    }
</style>