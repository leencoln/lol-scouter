import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Header from '@/components/Header'
import UserNameInput from '@/components/UserNameInput'
import UserInfo from '@/components/UserInfo'
import PlayedChampion from '@/components/PlayedChampion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    }
  ]
})
