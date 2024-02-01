<script setup>
import { ref } from 'vue';
const activeST = ref(0)
const menues = [
    {
        id:  '1',
        name: 'MEN',
    },
    {
        id:  '2',
        name: 'WOMEN',
    },
    {
        id:  '3',
        name: 'KIDS',
    },
    {
        id:  '4',
        name: 'CUSTOMIZE',
    },
    {
        id:  '5',
        name: 'FAVORITES',
    }
]
</script>

<template>
    <div class="logo">
        <i class='bx bxs-t-shirt'></i> KELLZU
    </div>
    <div class="menu">
        <div class="menuItem" v-for="menu in menues" :key="menu.id" :class="{'active' : activeST === menu.id}" @click="activeST=menu.id">
            {{ menu.name }}
        </div>
    </div>
    <div class="profile">
        <i class='bx prof bx-search-alt' ></i>
        <i class='bx prof bx-shopping-bag' ></i>
        <i class='bx prof bx-user-circle' ></i>
    </div>
</template>

<style scoped>
    .logo {
        height: 100%;
        width: 20%;
        color: aliceblue;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        cursor: pointer;
        user-select: none;
    }
    .bxs-t-shirt{
        font-size: 60px;
    }
    .logo:hover .bxs-t-shirt{
        color: bisque;
    }
    .menu {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menuItem {
        font-size: 20px;
        font-weight: 300;
        height: 100%;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }
    .active{
        border-top: 2px solid aliceblue;
    }
    .menuItem:hover{
        color: bisque;
    }
    .profile {
        height: 100%;
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: aliceblue;
        font-size: 30px;
        gap: 10px;
    }
.prof {
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
}
.prof:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transition: .5s;
}
</style>