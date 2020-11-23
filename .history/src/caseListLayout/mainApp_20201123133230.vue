<template>
    <div>
        <navbar></navbar>
        <div class="border"></div>
        <slot></slot>
    </div>
</template>

<script>
import Navbar from "@/layout/components/Navbar";
export default {
    components:{
        Navbar
    }
}
</script>
<style lang="scss" scoped>
.border{
    height: 20px;
    background: gray;
}
</style>