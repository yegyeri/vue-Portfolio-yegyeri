<script setup>
import { ref } from 'vue';
const activeUL = ref(0)
const colors= [
    {
        id: '1',
        style: 'color: #b14354;'
    },
    {
        id: '2',
        style: 'color: #4b43b1;'
    },
    {
        id: '3',
        style: 'color: #43b16e;'
    },
    {
        id: '4',
        style: 'color: #000000;'
    },
    {
        id: '5',
        style: 'color: #ffffff;'
    }
]
</script>

<template>
    <div class="colorSelect">
        <div class="colorItem" v-for="color in colors" :key="color.id">
            <i class='bx bxs-circle' :style="color.style" :class="{'active' : activeUL ===color.id}" @click="activeUL = color.id"></i>
        </div>
    </div>
</template>

<style scoped>
.colorSelect {
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.colorItem {
    height: 100%;
    width: 12%;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.active{
    margin-bottom: 25px;
}

</style>