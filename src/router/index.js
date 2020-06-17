import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Login1 from '@/views/Login1'
import home from '@/views/layout/home'
import chart from '@/views/chart/chart'
import list from '@/views/list/list'
import table from '@/views/table/table'
import text from '@/views/text/text'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: 'chart',
          name: 'chart',
          component: chart
        },
        {
          path: 'list',
          name: 'list',
          component: list
        },
        {
          path: '/table',
          name: 'table',
          component: table
        },
        {
          path: '/text',
          name: 'text',
          component: text
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login1',
      name: 'Login1',
      component: Login1
    }
  ]
})
