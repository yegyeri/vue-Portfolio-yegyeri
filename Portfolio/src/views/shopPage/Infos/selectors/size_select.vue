<script setup>
import { ref } from 'vue';
const activeUL = ref(0)
const sizes = [
    {
        id: '1',
        name: 'S'
    },
    {
        id: '2',
        name: 'M'
    },
    {
        id: '3',
        name: 'L'
    },
    {
        id: '4',
        name: 'XL'
    },
    {
        id: '5',
        name: 'XXL'
    },
    
]
</script>

<template>
    <div class="sizeSelect">
        <div class="sizes" v-for="size in sizes" :key="size.id">
            <div class="size" :class="{'active' : activeUL===size.id}" @click="activeUL = size.id">
                {{ size.name }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.sizeSelect {
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.sizes {
    height: 100%;
    width: 12%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.size {
    display: flex;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
}
.active {
    background-color: rgba(240, 248, 255, .2);
}
</style>