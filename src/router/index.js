import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '../view/test.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/hello'
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/test',
      name:'test',
      component: ()=>import('../view/test')
    }
  ]
})
