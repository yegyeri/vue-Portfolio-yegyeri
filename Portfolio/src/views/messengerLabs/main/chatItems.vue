<script setup>
import { ref } from 'vue';
const act = ref(0)
const chatItems = [
    {
        id: '1',
        name: 'Gerald Deen',
        lastMessage: 'I am ready',
        time: '6:50 pm',
        check: 'bxs-circle checked'
    },

    {
        id: '2',
        name: 'Aris Christofi',
        lastMessage: 'You are mostwelcome))',
        time: '2:44 pm',
        check: ''
    },
    
    {
        id: '3',
        name: 'Eddie Barnett',
        lastMessage: 'Thanks',
        time: '4:33 pm',
        check: ''
    },
    
    {
        id: '4',
        name: 'Julian Mendez',
        lastMessage: 'Are you sure?',
        time: '11:02 am',
        check: 'bxs-circle checked'
    },
    
    {
        id: '5',
        name: 'Henry Drake',
        lastMessage: 'What Can I do right now?',
        time: '10:35 am',
        check: 'bxs-circle checked'
    },
    
    {
        id: '6',
        name: 'Mabelle McKenzie',
        lastMessage: 'I am glad',
        time: '2 days ago',
        check: ''
    },
    
    {
        id: '7',
        name: 'Shawn Spencer',
        lastMessage: 'The doors need to be measured',
        time: '3 days ago',
        check: 'bxs-circle checked'
    },
    {
        id: '8',
        name: 'Ryan Gosling',
        lastMessage: 'I"m not dead in Driver',
        time: '6 days ago',
        check: ''
    },
    {
        id: '9',
        name: 'Jeremiah Weber',
        lastMessage: 'Ok??',
        time: '7 days ago',
        check: ''
    },
]
</script>

<template>
    <div class="Item" v-for="chatItem in chatItems" :key="chatItem.id" :class="{'active' : act===chatItem.id}" @click="act = chatItem.id">
        <div class="pic">
            <i class='bx bxs-user-circle' ></i>
        </div>
        <div class="text">
            <div class="name">
                <h2>{{ chatItem.name }}</h2>
            </div>
            <div class="mes">
                <span>{{ chatItem.lastMessage }}</span>
                <span class="time">{{ chatItem.time }}</span>
            </div>
        </div>
        <div class="dots">
            <i class='bx dot bx-dots-horizontal-rounded' ></i>
            <i class='bx' :class="chatItem.check"></i>
        </div>
    </div>
</template>

<style scoped>
.Item{
    width: 90%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--lab1);
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
}
.Item:hover{
    background-color: var(--lab2);
    transition: .5s ease;
}
.Item:hover .checked{
    color: aliceblue;
    transition: .5s ease;
}
.active{
    background-color: var(--lab2);
}
.pic{
    height: 100%;
    width: 15%;
    font-size: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(181, 181, 181);
}
.text{
    height: 100%;
    width: 72%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
}
.name h2{
    color: rgb(252, 252, 252);
    font-weight: 400;
    font-size: 22px;
}
.mes{
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255,.6);
    gap: 30px;
}
.time{
    color: rgba(255, 255, 255,.3);
}
.dots{
    height: 100%;
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.dot{
    font-size: 25px;
    color: rgba(255, 255, 255, .5);
}
.checked{
    color: var(--lab2);
}
</style>