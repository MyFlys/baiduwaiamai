import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyAppGuild from '@/pages/MyAppGuild'
import GuildBitem from '@/pages/GuildBitem'

// import MyAppGuild from '@/pages/MyAppGuild'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/guild',
      name: 'MyAppGuild',
      component: MyAppGuild
    }, {
      path: '/bitem',
      name: 'GuildBitem',
      component: GuildBitem
    }
  ]
})
