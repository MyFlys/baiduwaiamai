<template>
  <div>
    <guild-header></guild-header>
    <guild-artical-lists :lists="articalList"></guild-artical-lists>
    <my-app-footer></my-app-footer>

  </div>

</template>

<script>
  import GuildApis from "../apis/GuildApis"
  import MyAppFooter from "../components/commons/MyAppFooter"
  import GuildHeader from "../components/guild/GuildHeader"
  import GuildArticalLists from "../components/guild/GuildArticalLists"
  export default {
    name: "MyAppGuild.vue",
    components:{
      MyAppFooter,
      GuildHeader,
      GuildArticalLists,
    },
    data(){
      return{
        articalList:[]
      }
    },
    methods:{
      __initPage(){
        GuildApis.getGuildArticalLists((data)=>{
          console.log(data);
          this.articalList = data;
          this.__counter(data)
        })
      }
    },
    created(){
      this.__initPage();
    }
  }
</script>

<style scoped lang="scss">
div{
  width: 100%;
  box-sizing:border-box;
}

</style>
