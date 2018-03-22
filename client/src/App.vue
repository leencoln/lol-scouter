<template>
  <div id="app">
    <Header/>
    <UserNameInput v-on:getUserInfo="getUserInfo" v-on:getChampionMastery="getChampionMastery"></UserNameInput>
    <br>
    <UserInfo v-bind:userRankInfo="userRankInfo"></UserInfo>
    <PlayedChampions v-bind:championmastery="championmastery"></PlayedChampions>
  </div>
</template>

<script>
import axios from 'axios'

import Header from './components/Header.vue'
import UserNameInput from './components/UserNameInput.vue'
import UserInfo from './components/UserInfo.vue'
import PlayedChampions from './components/PlayedChampions.vue'

export default {
  name: 'App',

  data () {
    return {
      userRankInfo: undefined,
      champsList: [],
      championmastery: undefined
    }
  },

  created() {
    axios.post('/api/riot/static-champs-list')
      .then(res => {
        for(let key in res.data) {
          this.champsList.push(res.data[key]);
        }
      })
  },

  methods: {  
    getUserInfo(userName) {
      axios.post('api/riot', {
          userName: userName
        })
        .then(res => {
          if(res.data === "Err") {
            window.alert("올바른 소환사명을 다시 입력해주세요")
          } else if(typeof res.data === "object") {
            this.userRankInfo = res.data;
            this.userRankInfo.totalScore = this.userRankInfo.wins + this.userRankInfo.losses
            this.userRankInfo.winningRate = Math.round((this.userRankInfo.wins / this.userRankInfo.totalScore) * 10000) / 100;
          }          
        })
    },

    getChampionMastery(userName) {
      axios.post('/api/riot/match-record', {
        userName: userName
      })
      .then(res => {
        let mastery = res.data;
        let masteryOfChamps = this.champsList;
        let len = masteryOfChamps.length;  
        
        for(let i = 0; i < len; i++) {
          let ID = masteryOfChamps[i].id;
          if(mastery[ID]) {
            masteryOfChamps[i].mastery = 10 + mastery[ID];
          } else {
            masteryOfChamps[i].mastery = 10;
          }
        }

        this.championMastery = masteryOfChamps;
      })
    }
  },
  
  components: {
    'Header': Header,
    'UserNameInput': UserNameInput,
    'UserInfo': UserInfo,
    'PlayedChampions': PlayedChampions
  }


}
</script>

<style>
  body{
    background-image: url('./assets/wallpaper.png');
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
  }
</style>
