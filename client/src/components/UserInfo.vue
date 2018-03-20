<template>
    <div id="user-info" v-if="typeof userRankInfo === 'object'">
        <div id="user-name">{{userRankInfo.playerOrTeamName}}</div>
        <br>
        <div id="user-tier">{{`${userRankInfo.tier} ${userRankInfo.rank}`}}</div>
        <div id="league-points">{{`리그포인트 ${userRankInfo.leaguePoints}`}}</div>
        <div id="record-score">{{`${userRankInfo.totalScore}전 ${userRankInfo.wins}승 ${userRankInfo.losses}패 (${userRankInfo.winningRate}%)`}}</div>    
    </div>
</template>

<script>
export default {
    name: 'UserInfo',

    props: ['userRankInfo'],

}

</script>
<style>
    #user-info {
        color: #fbd62a;
        font-weight: 1000;
    }

    #user-name {
        font-size: 50px;        
    }    
</style>