<script setup>
import cardList from './cardList.vue'
</script>

<template>
    <div class="list">
        <div class="headList">
            <p>Account <i class='bx bxs-right-arrow' ></i> Payment methods</p>
            <h1>Choose your payment method</h1>
        </div>
        <div class="mainList">
            <cardList />
        </div>
        <div class="submitBtn">
            <button class="btn">Submit</button>
        </div>
    </div>
</template>

<style scoped>
.list {
    width: 70%;
    height: 70%;
    background-color: aliceblue;
    border-radius: 20px;
    box-shadow: 0px 0px 20px 10px rgba(34, 60, 80, 0.5);
    padding: 40px;
}
.headList {
    width: 100%;
    height: 15%;
}
.headList p{
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    color: rgb(120, 70, 166);
}
.headList h1 {
    font-weight: 400;
    margin-top: 10px;
}
.headList p:hover {
    cursor: pointer;
}
.mainList {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.submitBtn {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn {
    border: none;
    background-color: blueviolet;
    width: 85%;
    height: 60%;
    border-radius: 10px;
    color: aliceblue;
    font-size: 25px;
    font-weight: 300;
}
.btn:hover {
    background-color: #666;
    transition: .3s;
    cursor: pointer;
}
</style>