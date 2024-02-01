<script setup>
import rightLogin from './rightLogin.vue';
</script>

<template>
    <div class="section">
        <div class="loginContainer">
            <div class="leftLogin">
                <div class="linkImg">
                    <div class="links">
                        <i class='bx link bxl-vk'></i>
                        <i class='bx link bxl-instagram' ></i>
                        <i class='bx link bxl-telegram' ></i>
                        <i class='bx link bxl-youtube' ></i>
                        <i class='bx link bxl-facebook' ></i>
                    </div>
                    <img src="./png/air.svg" alt="">
                </div>
                <h1>AirPlane!</h1>
                <p>I'll give you flight,<br>and you will never be the same!<br>Let's GO!</p>
            </div>
            <div class="rightLogin">
                <rightLogin />
            </div>
        </div>
    </div>
</template>

<style scoped>
.section {
    width: 100%;
    height: 100vh;
    background-color: #3F3D56;
    display: flex;
    justify-content: center;
    align-items: center;
}
.loginContainer {
    width: 1100px;
    height: 650px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px 10px rgba(0,0,0,.2);
    @media (max-width: 1200px) {
        width: 900px;
    }
    @media (max-width: 1000px) {
        width: 500px;
        border-radius: 20px;
    }
    @media (max-width: 512px) {
        width: 350px;
    }
    @media (max-width: 320px) {
        width: 280px;
        height: 600px;
        border-radius: 20px;
    }
}
.linkImg{
    width: 100%;
    display: flex;
}
.links{
    display: flex;
    width: 15%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 10px;
    margin-left: 20px;
}
.link{
    padding: 10px;
    background-color: #3F3D56;
    border-radius: 10px;
    font-size: 25px;
    color: aliceblue;
}
.link:hover{
    background-color: #50A675;
    transition: .5s ease;
    user-select: none;
    cursor: pointer;
}
.leftLogin{
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    @media (max-width: 1000px) {
        display: none;
    }
}
.leftLogin img{
    width: 350px;
    margin-bottom: 100px;
    border-radius: 30px;
    margin-left: 150px;
    @media (max-width: 1200px) {
        width: 200px;
        margin-left: 50px;
    }
}
.leftLogin h1 {
    font-weight: 400;
    color: #3F3D56;
    font-size: 70px;
    @media (max-width: 1200px) {
        font-size: 50px;
    }
}
.leftLogin p{
    font-weight: 300;
    color: #3F3D56;
    font-size: 20px;
    text-align: end;
    margin-left: 200px;
    @media (max-width: 1200px) {
        margin-left: 0px;
    }
}
.rightLogin{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
        width: 100%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
}
</style>