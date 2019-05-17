import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import register from '@/components/register/register'
import index from '@/components/index/index'
import appeal from '@/components/appeal/appeal'
import proposal from '@/components/proposal/proposal'
import takeout from '@/components/takeout/takeout'
import treehold from '@/components/treehold/treehold'
import mother from '@/components/mother/mother';


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/appeal',
      name: 'appeal',
      component: appeal
    },
    {
      path: '/proposal',
      name: 'proposal',
      component: proposal
    },
    {
      path: '/takeout',
      name: 'takeout',
      component: takeout
    },
    {
      path: '/treehold',
      name: 'treehold',
      component: treehold
    },
    {
      path: '/mother',
      name: 'mother',
      component: mother
    }
  ]
})
