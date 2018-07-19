<template>
 <div class="bigbox">
     <mysql-header></mysql-header>
     <mysql-section></mysql-section>
     <mysql-footer></mysql-footer>
 </div>
</template>

<script>
import MysqlHeader from "../components/Mysql/MysqlHeader"
import MysqlSection from "../components/Mysql/MysqlSection"
import MysqlFooter from "../components/Mysql/MysqlFooter"
 export default {
   data () {
     return {

     }
   },
   components: {
       MysqlHeader,
       MysqlSection,
       MysqlFooter
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
