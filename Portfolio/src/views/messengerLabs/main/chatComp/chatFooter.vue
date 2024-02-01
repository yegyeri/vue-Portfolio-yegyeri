<script setup>
import { ref } from 'vue';
const clipDown = ref(false)
</script>

<template>
    <div class="cont">
        <i class='bx bx-plus' @click="clipDown = !clipDown"></i>
        <input type="text" placeholder="Type a message here">
        <i class='bx bx-smile' ></i>
        <i class='bx bxs-send' ></i>
    </div>
    <ul class="clipDown" v-if="clipDown">
        <li><i class='bx bxs-camera-plus' ></i></li>
        <li><i class='bx bxs-file-doc' ></i></li>
        <li><i class='bx bx-music' ></i></li>
        <li><i class='bx bxs-map' ></i></li>
    </ul>
</template>

<style scoped>
::placeholder{
    color: rgba(255, 255, 255, 0.3);
    font-size: 17px;
}
.cont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 40px);
    width: calc(100% - 40px);
    padding: 10px;
    background-color: var(--lab1);
    border-radius: 10px;
}
.cont .bx{
    color: var(--lab2);
    font-size: 30px;
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cont .bx:hover{
    color: aliceblue;
    transition: .5s ease;
    cursor: pointer;
    user-select: none;
}
.cont .bxs-send{
    background-color: var(--lab2);
    color: aliceblue;
    border-radius: 10px;
    width: 7%;
}
.cont .bxs-send:hover{
    background-color: var(--lab1);
    color: var(--lab2);
    transition: .5s ease;
}
.cont input{
    height: 70%;
    width: 70%;
    padding: 0 20px 0 20px;
    border: none;
    background-color: var(--lab1);
    font-size: 17px;
    color: aliceblue;
}
.cont input:focus{
    outline: none;
}
.clipDown{
    position: absolute;
    width: 50px;
    height: 220px;
    bottom: 90px;
    left: 595px;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.clipDown li{
    color: var(--lab2);
    font-size: 25px;
    background-color: var(--lab1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
.clipDown li:hover{
    background-color: var(--lab2);
    color: aliceblue;
    transition: .5s ease;
    cursor: pointer;
    user-select: none;
}
</style>