<script setup>
</script>

<template>
    <div class="page">
        <img src="./pngHome/Art.jpg" alt="">
        <h1>Сайт "Арт Галерея"</h1>
        <h2>Вёрстка + Слайдер</h2>
        <router-link to="/renesans" class="GoBtn">GO EXAMPLE</router-link>
    </div>
</template>

<style scoped>
    .page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.page img{
    width: 600px;
    border-radius: 10px;
    opacity: 70%;
    cursor: pointer;
    user-select: none;
}
.page img:hover{
    opacity: 100%;
    transition: .5s;
}
h1, h2{
    color: var(--prof3);
    font-size: 35px;
}
.GoBtn{
    text-decoration: none;
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--prof2);
    border-radius: 10px;
    color: var(--prof3);
    font-size: 22px;
    cursor: pointer;
    user-select: none;
}
.GoBtn:hover{
    background-color: var(--prof3);
    color: var(--prof1);
    transition: .5s ease;
}
</style>