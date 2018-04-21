import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/time-entries',
      name: 'time-entries',
      component: TimeEntries,
      children: [
        {
          path: 'log-time',
          component: LogTime
        }
      ]
    }
  ],
  redirect: {
    '*': '/home'
  }
})
