import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//guild
import MyAppGuild from '@/pages/MyAppGuild'
import GuildBitem from '@/pages/GuildBitem'
//index
import WmIndex from '@/pages/WmIndex'
//shop
import Shop from '../pages/shop.vue'
import ShopGoods from '../pages/ShopGoods.vue'

//cater
import WmCaters from '../pages/WmCaters'

//cart
import carts from  "@/pages/carts"

//my
import WmMysql from '@/pages/WmMysql'
import WmLogin from '@/pages/WmLogin'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'WmIndex',
      component: WmIndex
    },
    // {
    //   path: '/WmIndex',
    //   name: 'WmIndex',
    //   component: WmIndex
    // },
    {
      path: '/guild',
      name: 'MyAppGuild',
      component: MyAppGuild
    },
    {
      path: '/bitem',
      name: 'GuildBitem',
      component: GuildBitem
    },
    {
      path: '/shop',
      name: 'Shop',
      component:Shop
    },
    {
      path: '/ShopGoods',
      name: 'ShopGoods',
      component:ShopGoods
    },
    {
      path: '/WmCaters',
      name: 'WmCaters',
      component: WmCaters
    },
    {
      path: '/carts',
      component: carts
    },
    {
      path: '/WmMysql',
      name: 'WmMysql',
      component: WmMysql
    },
    {
      path: '/WmLogin',
      name: 'WmLogin',
      component: WmLogin
    },
  ]
})
