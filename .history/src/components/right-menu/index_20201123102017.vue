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
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">

</style>