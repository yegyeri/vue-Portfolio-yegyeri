<script setup>
import leftList from './components/leftList.vue'
import cardForm from './components/cardForm.vue';
</script>

<template>
    <div class="section">
        <div class="leftList">
            <leftList />
        </div>
        <div class="rightCard">
            <cardForm />
        </div>
    </div>
</template>

<style scoped>
.section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(166deg, rgba(157,67,98,1) 43%, rgba(233,182,191,1) 81%);
}
.leftList {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rightCard {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>