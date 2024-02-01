<script setup>
import { ref } from 'vue';
let activeEL = ref(0)
let checkedEL = ref(0)
const cardList = [
    {
        id: '1',
        bx: 'bx bxl-mastercard',
        num: 'XXXX XXXX XXXX 7777',
        mmyy: '01/24',
        style: 'color: red;',
        class: 'active'
    },
    {
        id: '2',
        bx: 'bx bxl-visa',
        num: 'XXXX XXXX XXXX 9653',
        mmyy: '03/26',
        style: 'color: blue;'
    },
    {
        id: '3',
        bx: 'bx bxl-paypal',
        num: 'XXXX XXXX XXXX 6498',
        mmyy: '07/25',
        style: 'color: rgb(85, 128, 132);'
    },
    {
        id: '4',
        bx: 'bx bxs-credit-card',
        num: 'Add Payment Method',
    }
]
</script>

<template>
    <div v-for="card in cardList" 
        :key="card.id" 
        class="cardItem" 
        :class="{'active': activeEL===card.id}" 
        @click="activeEL = card.id, checkedEL = card.id">
            <div class="logo">
                <i :class="card.bx" :style="card.style"></i>
            </div>
            <div class="numbers">
                <p>{{card.num}}</p>
                <h3>{{card.mmyy}}</h3>
            </div>
            <div class="check">
                <i class="bx bxs-check-circle" :class="{'checked': checkedEL===card.id}"></i>
            </div>
    </div>
</template>

<style scoped>
.cardItem {
    width: 90%;
    height: 25%;
    border: 2px solid rgb(102, 102, 102);
    border-radius: 10px;
    display: flex;
    cursor: pointer;
}
.cardItem:hover {
    border: 2px solid blueviolet;
}
.cardItem:hover .bxs-check-circle {
    color: blueviolet;
}
.logo{
    width: 20%;
    height: 100%;
    font-size: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(60, 60, 177);
}
.numbers {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-weight: 400;
}
.numbers p {
    font-size: 20px;
    color: #393737;
}
.numbers h3 {
    font-size: 15px;
    font-weight: 500;
    color: #393737;
}
.check {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-left: 25px;
    color: #666;
}
.active {
    border: 2px solid blueviolet;
}
.checked {
    color: blueviolet;
}
</style>