<script setup>
import colorSelect from './selectors/color_select.vue';
import sizeSelect from './selectors/size_select.vue';

import { ref } from 'vue';

const circles = ref([
    {message: 'GREEN'},
    {message: 'BLUE'},
    {message: 'PURPLE'},
    {message: 'BEIGE'},
    {message: 'RED'},
])
const sizes  = ref([
    {message: "XS"},
    {message: "S"},
    {message: "M"},
    {message: "L"},
    {message: "XL"},
    {message: "2XL"}  
])
</script>

<template>
    <div class="leftDiv">
        <div class="selectors">
            <colorSelect 
            :circles="circles"
            />
            <sizeSelect 
            :sizes="sizes"/>
        </div>
    </div>
    <div class="rightDiv">
        <div class="iconBack">
            <i class='bx bxs-share-alt'></i>
        </div>
        <div class="iconBack">
            <i class='bx bx-heart' ></i>
        </div>
        <div class="iconBack">
            <i class='bx bx-comment-dots' ></i>
        </div>
    </div>

    
</template>

<style scoped>
    .leftDiv{
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
    .rightDiv{
        width: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: end;
    }
    .selectors {
        display: flex;
        height: 50%;
        width: 100%;
        justify-content: start;
        align-items: center;
    }
    .iconBack {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
        border-radius: 7px;
        margin-right: 15px;
        margin-top: 10px;
        color: #955b5b;
    background-color: rgba(255, 255, 255, 0.5);
    }
    .iconBack:hover {
        background-color: rgba(2, 2, 2, 0);
        color: #3f3c3c;
        transition: .6s;
        cursor: pointer;
    }

</style>