<script setup>
import renHeader from './header/renHeader.vue'
import renMain from './main/renMain.vue'
import renFooter from './footer/renFooter.vue'
</script>

<template>
    <div class="section">
        <div class="page">
            <header>
                <renHeader />
            </header>
            <main>
                <renMain />
            </main>
            <footer>
                <renFooter />
            </footer>
        </div>
    </div>
</template>

<style scoped>
.section{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('./png.svg/1.jpg');
    background-size: cover;
    filter: brightness(100%)
}
.page {
    width: 90%;
    height: 90%;
    border: 3px solid #fff;
    border-radius: 20px;
    overflow: hidden;
}
header {
    width: 100%;
    height: 10%;
}
main {
    width: 100%;
    height: 80%;
}
footer {
    width: 100%;
    height: 10%;
}
</style>