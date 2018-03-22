import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Header from '@/components/Header'
import UserNameInput from '@/components/UserNameInput'
import UserInfo from '@/components/UserInfo'
import PlayedChampions from '@/components/PlayedChampions'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/userName',
      name: 'UserInfo',
      component: UserInfo
    }
  ]
})
