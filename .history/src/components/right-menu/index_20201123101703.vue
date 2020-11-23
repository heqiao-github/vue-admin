<template>
    <div class="nav-right">
        <header>
            <span>{{content}}</span>
            <el-button type="primary" :size=""></el-button>
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
         }
     }
}
</script>