<template>
    <div id="inputBox">
        <input type="text" v-model="userName" v-on:keyup.enter="getUserName" placeholder="소환사명을 입력해주세요">
        <i class="addBtn fa fa-plus"v-on:click="getUserName"></i>
    </div>
</template>
<script>
export default {
    name: 'UserNameInput',
    data() {
        return {
            userName: ''
        }
    },

    methods: {
        getUserName() {
            if(this.userName) {
                let value = this.userName.trim();
                this.$emit('getUserInfo', value);
                this.userName = '';
            }
        }
    }
}
</script>
<style>
    
</style>
