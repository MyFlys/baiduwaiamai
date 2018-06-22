import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import carts from  "@/pages/carts"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: './',
      component: carts
    }
  ]
})
