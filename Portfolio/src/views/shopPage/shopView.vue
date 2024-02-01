<script setup>
import headerShop from './Infos/headerShop.vue';
import mainShop from './Infos/mainShop.vue';
import footerShop from './Infos/footerShop.vue';
</script>

<template>
    <div class="section">
        <div class="shopWindow">
            <div class="headerShop">
                <headerShop />
            </div>
            <div class="mainShop">
                <mainShop />
            </div>
            <div class="footerShop">
                <footerShop />
            </div>
        </div>
    </div>
</template>

<style scoped>
.section {
    width: 100%;
    height: 100vh;
    background: radial-gradient(circle, rgba(85,85,85,1) 18%, rgba(18,18,18,1) 95%);
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.shopWindow{
    width: 85%;
    height: 90%;
    background-image: url(./png/hoodie.jpg);
    background-size: cover;
    box-shadow: 0px 0px 45px 5px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
.headerShop {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.mainShop{
    width: 100%;
    height: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.footerShop {
    width: 100%;
    height: 25%;
    margin-left: 30px;
    border-radius: 20px;
    display: flex;
    }
</style>