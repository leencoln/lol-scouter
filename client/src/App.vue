<template>
  <div id="app">
    <Header/>
    <UserNameInput v-on:getUserInfo="getUserInfo"></UserNameInput>
    <UserInfo v-bind:userRankInfo="userRankInfo"></UserInfo>
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

  data () {
    return {
      userRankInfo : undefined
    }
  },

  methods: {  
    getUserInfo(userName) {
      axios.post('api/riot', {
          userName: userName
        })
        .then(res => {
          this.userRankInfo = res.data;
          this.userRankInfo.totalScore = this.userRankInfo.wins + this.userRankInfo.losses
          this.userRankInfo.winningRate = Math.round((this.userRankInfo.wins / this.userRankInfo.totalScore) * 10000) / 100;
        })
    }

  },
  
  components: {
    'Header': Header,
    'UserNameInput': UserNameInput,
    'UserInfo': UserInfo
  }


}
</script>

<style>
</style>
