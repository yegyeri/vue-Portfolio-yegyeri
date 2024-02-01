<script setup>
import { ref } from 'vue';
const act = ref(0)
const menues = [
    {
        id: '1',
        to: '/home/shopView',
        name: 'SHOP'
    },
    {
        id: '2',
        to: '/home/ArtGallery',
        name: 'GALLERY'
    },
    {
        id: '3',
        to: '/home/paymentView',
        name: 'PAYMENT'
    },
    {
        id: '4',
        to: '/home/loginView',
        name: 'LOGIN'
    },
    {
        id: '5',
        to: '/home/labsView',
        name: 'LABS'
    },
    
]
</script>

<template>
    <div class="backGround">
        <header>
            <div class="logo">
                <h2><span>y</span>eg<span>y</span>eri</h2>
            </div>
            <div class="menues">
                <div class="menu" v-for="menu in menues" :key="menu.id">
                    <router-link :to="menu.to" class="rBtn" :class="{'active' : act === menu.id}" @click="act=menu.id"> {{ menu.name }}</router-link>
                </div>
            </div>
        </header>
        <main>
            <div class="feed">
                <router-view></router-view>
            </div>
            <div class="hello">
                <i class='bx bx-up-arrow-alt' ></i>
                <img src="./homePages/pngHome/profilePic.png" alt="">
                <h1>Hello,</h1>
                <h2>I'm a <span>Junior</span></h2>
                <h3>Frontend developer</h3>
                <p>And this is my portfolio</p>
            </div>
        </main>
    </div>
</template>

<style scoped>
.backGround{
    width: 100%;
    height: 100vh;
    background-color: var(--prof1-1);
}
header{
    width: 100%;
    height: 10%;
    background-color: var(--prof1);
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.logo{
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo h2{
    color: rgb(223, 223, 223);
    font-weight: 600;
    font-size: 40px;
}
.logo h2 span{
    color: var(--prof2);
}
.menues{
    height: 100%;
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu{
    height: 100%;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--prof3);
    font-size: 25px;
    height: 50px;
    width: 150px;
    border-radius: 10px;
}
.rBtn:hover{
    background-color: var(--prof3);
    color: var(--prof2);
    transition: .5s ease;
}
.active{
    background-color: var(--prof2);
}
main{
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.feed{
    height: 100%;
    width: 50%;
}
.hello{
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.hello i{
    font-size: 150px;
    color: var(--prof2);
}
.hello h1{
    font-size: 60px;
    color: var(--prof3);
}
.hello h2{
    font-size: 40px;
    color: var(--prof3);
}
.hello h2 span{
    color: var(--prof2);
}
.hello h3{
    font-size: 30px;
    color: var(--prof3);
}
.hello p{
    font-weight: 300;
    font-size: 20px;
    color: var(--prof2);
    margin-bottom: 150px;
}
.hello img{
    width: 300px;
    border-radius: 50%;
}
</style>