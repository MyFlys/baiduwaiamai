<template>
 <div class="bigbox">
     <login-header></login-header>
     <login-section></login-section>
 </div>
</template>

<script>
import LoginHeader from "../components/WmLogin/WmloginHeader"
import LoginSection from "../components/Wmlogin/WmloginSection"
 export default {
   data () {
     return {

     }
   },
   components: {
     LoginHeader,
     LoginSection
   }
 }
</script>

<style scoped>
    .bigbox{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
 
</style>
