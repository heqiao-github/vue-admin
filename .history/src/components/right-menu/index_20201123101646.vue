<template>
    <div class="nav-right">
        <header>
            <span>{{content}}</span>
            el
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