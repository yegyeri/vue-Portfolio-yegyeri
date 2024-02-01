<script setup>
import headerLabs from './header/headerLabs.vue'
import leftMenu from './main/leftMenu.vue'
import chatList from './main/chatList.vue'
import chatMain from './main/chatMain.vue'
import personInfo from './main/personInfo.vue'

</script>

<template>
    <div class="section">
        <div class="header">
            <headerLabs />
        </div>
        <div class="main">
            <leftMenu />
            <chatList />
            <chatMain />
            <personInfo />
        </div>
    </div>
</template>

<style scoped>
.section{
    width: 100%;
    height: 100vh;
    background-color: var(--lab1);
}
.header{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main{
    width: 100%;
    height: calc(100vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>