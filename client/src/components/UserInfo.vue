<template>
    <div id="user-info">
        <div id="user-name" v-if="userRankInfo">{{userRankInfo.playerOrTeamName}}</div>
        <div id="user-tier" v-if="userRankInfo">{{`${userRankInfo.tier} ${userRankInfo.rank}`}}</div>
        <div id="league-points" v-if="userRankInfo">{{`리그포인트 ${userRankInfo.leaguePoints}`}}</div>
        <div id="record-score" v-if="userRankInfo">{{`${userRankInfo.totalScore}전 ${userRankInfo.wins}승 ${userRankInfo.losses}패 (${userRankInfo.winningRate}%)`}}</div>    
    </div>
</template>

<script>
export default {
    name: 'UserInfo',

    props: ['userRankInfo'],

}

</script>
<style>
    
</style>