<template>
  <div class="guildBody">
    <guild-header :lists="articalList"></guild-header>
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
    components:{
      MyAppFooter,
      GuildHeader,
      GuildArticalLists,
    },
    data(){
      return{
        articalList:{},
        // imgIndex:""
      }
    },
    methods:{
      __initPage(){
        GuildApis.getGuildArticalLists((data)=>{
          this.articalList = data;
          // console.log(this.articalList.GuildArticals[0].bArticals[0].id);
        })
      },


    },
    mounted(){
    },
    created(){
      this.__initPage();
      // window.addEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style scoped lang="scss">
.guildBody{
  width: 100%;
  height: 100%;
  box-sizing:border-box;
  display:-webkit-flex;
  flex-direction:column;
}
</style>
