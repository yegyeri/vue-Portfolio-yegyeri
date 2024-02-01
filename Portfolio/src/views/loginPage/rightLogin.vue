<script setup>
import { ref } from 'vue';
const actUl = ref(1)
</script>

<template>
    <div class="login">
        <div class="btns">
            <router-link to="/login/log" class="btnRout" :class="{'active' : actUl===1}" @click="actUl=1">LOG IN</router-link>
            <router-link to="/login/sign" class="btnRout" :class="{'active' : actUl===2}" @click="actUl=2">SIGN UP</router-link>
        </div>
        <div class="inputs">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
.login {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    @media (max-width: 1000px) {
        
        border-radius: 20px;
    }
}
.btns{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.btnRout{
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    color: #3F3D56;
}
.active{
    color: aliceblue;
    background-color: #50A675;
    transition: .5s;
}
.inputs {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>