<script setup>
import colorSelector from './selectors/color_select.vue'
import sizeSelector from './selectors/size_select.vue'
</script>

<template>
    <div class="photos">
        <img src="../png/hoodie1.jpg">
        <img src="../png/hoodie2.jpg">
        <img src="../png/hoodie3.jpg">
    </div>
    <div class="product">
        <img src="../png/greyH.png" alt="">
    </div>
    <div class="selectors">
        <p>HOODIE UNISEX</p>
        <colorSelector />
        <sizeSelector />
        <div class="stars">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
        <div class="priceBTN">
            <span>14.99 $</span>
            <button>ADD TO CARD</button>
        </div>
    </div>
</template>

<style scoped>
.photos{
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.photos img {
    width: 120px;
    border-radius: 20px;
    cursor: pointer;
    opacity: 70%;
}
.photos img:hover {
    opacity: 100%;
    transition: .5s;
}
.product{
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product img {
    width: 550px;
}
.selectors {
    height: 80%;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
.priceBTN {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.priceBTN span {
    color: aliceblue;
    font-weight: 300;
    font-size: 70px;
}
.priceBTN button {
    width: 60%;
    height: 30%;
    border: none;
    background-color: rgba(240, 248, 255, .4);
    border-radius: 20px;
    color: black;
    font-size: 30px;
    font-weight: 300;
    cursor: pointer;
    user-select: none;
}
.priceBTN button:hover {
    background-color: rgba(240, 248, 255, .8);
    transition: .5s;
}
.selectors  p {
    color: aliceblue;
    font-weight: 300;
    font-size: 40px;
}
.stars {
    font-size: 30px;
    color: rgb(224, 224, 90);
}
</style>