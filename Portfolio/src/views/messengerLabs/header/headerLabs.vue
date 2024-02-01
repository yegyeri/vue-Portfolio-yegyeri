<script setup>
import { ref } from 'vue';
const isShowDropdown = ref(false)
</script>

<template>
    <div class="logo">
        <i class='bx bxs-brain'></i>LABS
    </div>
    <div class="center-side">

    </div>
    <div class="search">
        <i class='bx bx-search' ></i>
        <input type="text" placeholder="Search here">
    </div>
    <div class="profile">
        <i class='bx bxs-bell' ></i>
        <img src="./ProfPic.jpg" alt="">
        <h3>Sarah Donor</h3>
        <i class='bx bx-chevron-down' v-on:click="isShowDropdown=!isShowDropdown"></i>
        <ul class="dropMenu" v-if="isShowDropdown">
            <li class="dropItem"><i class='bx bxs-user-rectangle'></i> PROFILE</li>
            <li class="dropItem"><i class='bx bx-cog' ></i> SETTINGS</li>
            <li class="dropItem"><i class='bx bx-log-out' ></i> SING OUT</li>
        </ul>
    </div>
</template>

<style scoped>
::placeholder{
    color: rgba(205, 205, 205, .7);
}
.profile{
    height: 90px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.logo{
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: var(--lab2);
    gap: 5px;
}
.logo:hover{
    cursor: pointer;
    user-select: none;
    color: rgb(222, 222, 222);
    transition: .5s;
}
.logo .bx{
    font-size: 60px;
}
.center-side{
    height: 90px;
    width: 1100px;
    
}
.search{
    height: 90px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.search i{
    color: rgb(248, 247, 247);
    font-size: 30px;
}
.search input {
    width: 150px;
    height: 20px;
    padding: 10px 15px 10px 15px;
    border-radius: 30px;
    border: none;
    background-color: var(--lab1);
    color: aliceblue;
    font-size: 15px;
}
.search input:focus{
    border: none;
    outline: none;
}
.profile img{
    width: 45px;
    border-radius: 50%;
    cursor: pointer;
}
.bxs-bell{
    position: relative;
    z-index: 1;
    font-size: 30px;
    color: aliceblue;
}
.bxs-bell:hover{
    color: bisque;
    transition: .5s;
    cursor: pointer;
    user-select: none;
}
.bxs-bell::after{
    content: '';
    position: absolute;
    z-index: 2;
    border-radius: 50%;
    top: 1px;
    right: 3px;
    width: 10px;
    height: 10px;
    background-color: red;
}
.profile h3{
    color: aliceblue;
    font-weight: 300;
    font-size: 19px;
}
.bx-chevron-down{
    color: aliceblue;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
}
.dropMenu{
    position: absolute;
    width: 125px;
    height: 120px;
    z-index: 2;
    color: aliceblue;
    top: 80px;
    right: 50px;
    background-color: var(--lab1-1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
}
.dropItem{
    list-style: none;
    gap: 5px;
    width: 100%;
    height: 33%;
    font-size: 20px;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    user-select: none;
}
.dropItem .bx {
    font-size: 25px;
}
.dropItem:hover .bx{
    color: var(--lab2);
    transition: .5s ease;
}
.bx-chevron-down:hover {
    color: var(--lab2);
    transition: .5s ease;
}
</style>