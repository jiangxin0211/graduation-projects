import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import CommonHeader from '@/components/common/CommonHeader' 
// import CommonFooter from '@/components/common/CommonFooter' 
import Home from '@/components/Home/Home'
import Evaluate from '@/components/Evaluate/Evaluate'
import Mynews from '@/components/Mynews/Mynews'
import Remark from '@/components/Remark/Remark'
import EIQ from '@/components/EIQ/EIQ'
import Introduce from '@/components/Introduce/Introduce'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/HomeMap',
      component: Home
    },
    {
      path: '/Evaluate',
      component: Evaluate
    },
    {
      path: '/Remark',
      component: Remark
    },
    {
      path: '/Mynews',
      component: Mynews
    },
    {
      path:'/EIQ',
      component:EIQ
    },
    {
      path: '/Question',
      component: EIQ
    },
    {
      path:'/Introduce',
      component:Introduce
    }
  ]
})
