<script setup>
import chatHeader from './chatComp/chatHeader.vue'
import chatMainTwo from './chatComp/chatMain.vue'
import chatFooter from './chatComp/chatFooter.vue'
</script>

<template>
    <div class="chatMain">
        <div class="header">
            <chatHeader />
        </div>
        <div class="main">
            <chatMainTwo />
        </div>
        <div class="footer">
            <chatFooter />
        </div>
    </div>
</template>

<style scoped>
.chatMain{
    height: 100%;
    width: 800px;
    background-color: var(--lab1-1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.header{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--lab1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.main{
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: end;
    overflow: hidden;
}
.footer{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>