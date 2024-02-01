<script setup>
import { ref } from 'vue';
import inputsCard from './inputsCard.vue';
const cardNumber = ref('#### #### #### ####')
const cardName = ref('')
const cardMonth = ref('')
const cardYear = ref('')
const cvv = ref('')
</script>

<template>
        <div class="card">
            <div class="cardVis">
                <div class="headCard">
                    <i class='bx bxs-microchip bx-rotate-90' ></i>
                    <i class='bx bxl-visa' ></i>
                </div>
                <div class="numberCard">
                    <p>{{ cardNumber }}</p>
                </div>
                <div class="expirations">
                    <h3>{{ cardName }}</h3>
                    <p>{{ cardMonth }}/{{ cardYear }}</p>
                </div>
            </div>
            <div class="cardVisBack">
                <div class="headBack">
                    <div class="back">

                    </div>
                </div>
                <div class="cvvBack">
                    <p>{{ cvv }}</p>
                </div>
                <div class="logo">
                    <i class='bx bxl-visa' ></i>
                </div>
            </div>
        </div>
        <div class="forms">
            <inputsCard v-model="cardNumber"
            v-model:cardName="cardName"
            v-model:cardMonth="cardMonth"
            v-model:cardYear="cardYear"
            v-model:cvv="cvv"
            />
        </div>
</template>

<style scoped>
.forms {
    width: 70%;
    height: 70%;
    background-color: aliceblue;
    margin-top: 200px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 10px rgba(34, 60, 80, 0.5);
}
.card{
    position: absolute;
    width: 30%;
    height: 35%;
    margin-bottom: 500px;
    transform-style: preserve-3d;
    transition: all 1s ease;
}
.card:hover{
    transform: rotateY(180deg);
}
.cardVis {
    width: 100%;
    height: 100%;
    background-image: url(../png/cardBack.jpg);
    background-size: cover;
    border-radius: 20px;
    position: absolute;
    margin-bottom: 500px;
    backface-visibility: hidden;
    box-shadow: 0px 0px 20px 10px rgba(34, 60, 80, 0.5);
}
.cardVisBack {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(../png/cardBack.jpg);
    background-size: cover;
    border-radius: 20px;
    position: absolute;
    margin-bottom: 500px;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    box-shadow: 0px 0px 20px 10px rgba(34, 60, 80, 0.5);
}
.headCard {
    width: 100%;
    height: 35%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 90px;
    color: rgb(201, 201, 75);
    margin-left: 40px;
    margin-top: 20px;
}
.bxl-visa{
    font-size: 150px;
    color: aliceblue;
    margin-right: 80px;
}
.numberCard{
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: start;
    align-items: end;
    color: aliceblue;
    font-size: 35px;
    font-weight: 300;
    margin-left: 30px;
}
.expirations{
    width: 100%;
    height: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.expirations h3 {
    color: aliceblue;
    font-weight: 300;
    font-size: 30px;
    margin-left: 30px;
}
.expirations p{
    color: aliceblue;
    font-weight: 300;
    font-size: 25px;
    margin-right: 60px;
}
.headBack{
    width: 100%;
    height: 40%;
}
.back {
    width: 100%;
    height: 50%;
    background-color: rgba(0,0,0,0.7);
    margin-top: 50px;
}
.cvvBack{
    width: 90%;
    height: 20%;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: rgba(240, 248, 255, .8);
    border-radius: 10px;
}
.cvvBack p{
    color: #666;
    padding: 10px 20px 10px 440px;
    font-size: 30px;
    font-weight: 300;
    border-radius: 10px;
}
.logo{
    width: 110%;
    height: 40%;
    display: flex;
    justify-content: end;
    align-items: center;
}
.logo i {
    opacity: 80%;
    margin-bottom: 50px;
    margin-left: 100px;
}
</style>