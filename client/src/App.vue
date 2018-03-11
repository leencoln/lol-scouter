<template>
  <div id="app">
    <Header/>
    <UserNameInput v-on:getUserInfo="getUserInfo"></UserNameInput>

  </div>
</template>

<script>
import axios from 'axios';

import Header from './components/Header.vue'
import UserNameInput from './components/UserNameInput.vue'
import UserInfo from './components/UserInfo.vue'
import PlayedChampion from './components/PlayedChampion.vue'

export default {
  name: 'App',

  methods: {  
    getUserInfo(userName) {
      axios.post('api/riot', {
          userName: userName
        })
        .then(res => console.log(res.data));
    }

  },

  components: {
    'Header': Header,
    'UserNameInput': UserNameInput
  }



}
</script>

<style>
</style>
