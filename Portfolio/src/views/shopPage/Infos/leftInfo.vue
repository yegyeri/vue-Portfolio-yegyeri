<script setup>
import {defineProps} from 'vue'
    // eslint-disable-next-line no-unused-vars
    const props = defineProps({
        rating: {
            type: Number,
            default: 0
        },
        starLimit: {
            type: Number,
            default: 5
        }
    })

</script>

<template>
    <div class="cont_info">
        <div class="name">
            <h2>UNISEX HOODIE</h2>
            <p class="order">We hope that this item will please you and you will wear it every day! This hoodie is a unisex model and is suitable for men and women, boys and girls.</p>
            <div class="photos">
                <img src="../png/hoodie1.jpg" class="hoodPH">
                <img src="../png/hoodie2.jpg" class="hoodPH">
                <img src="../png/hoodie3.jpg" class="hoodPH">
            </div>
            <div class="rates">
                <span v-for="index in starLimit" :key="index" class="star" ><i class='bx bxs-star' ></i></span> <p>5.0</p>
            </div>
            <p class="rateNumber">3489 rates</p>
        </div>
        <div class="select">
        </div>
        <div class="buy">
            <p>9.99$</p>
            <button>ADD TO CARD</button>
        </div>
    </div>
</template>

<style scoped>
.cont_info {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    border-radius: 10px;
    height: 65%;
    background-color: rgba(255, 255, 255, 0.5);
}
.name h2{
    padding: 10px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 40px;
    margin-bottom: 20px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.8);
    background-color: #F3ACA6;
}
.rateNumber{
    color: #c67972;
    text-decoration: underline;
    font-size: 20px;
    cursor: pointer;
}
.order{
    width: 90%;
    font-size: 25px;
    margin-bottom: 20px;
    font-weight: 300;
    color: rgba(94, 65, 63, 0.7);
    text-align: center;
}
.photos {
    width: 100%;
    height: 210px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hoodPH {
    width: 150px;
    height: 100%;
    margin-left: 20px;
    border-radius: 20px;
    cursor: pointer;
}
.hoodPH:hover {
    border: 2px solid #F3ACA6;
    width: 160px;
    height: 220px;
    transition: .5s ease;
}
.rates {
    position: relative;
    width: 100%;
    height: 30px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.rates span {
    margin-bottom: 20px;
}
.star {
    display: inline-block;
    width: 24px;
    font-size: 24px;
    height: 24px;
    color: #cd685f;
}
.rates p {
    color: #c67972;
    margin-bottom: 18px;
    cursor: pointer;
    font-size: 22px;
    margin-left: 10px;
}
.select {
    width: 100%;
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.buy {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.buy p {
    width: 150px;
    height: 150px;
    font-size: 45px;
    color: #955b5b;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

}
.buy button {
    width: 290px;
    height: 100px;
    font-size: 30px;
    border: none;
    border-radius: 10px;
    color: #955b5b;
    background-color: rgba(255, 255, 255, 0.5);
}
.buy button:hover {
    background-color: rgba(2, 2, 2, 0);
    color: #3f3c3c;
    transition: .6s;
    cursor: pointer;
}
</style>