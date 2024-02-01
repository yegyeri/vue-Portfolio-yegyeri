<script setup>
const messages = [
    {
        id: '1',
        class: 'friend',
        class2: 'friend2',
        mess: 'Thanks for the file sharing. That has ever been to a meeting, can recall the all familiar passing the card',
        time: '2:41 pm'
    },
    {
        id: '2',
        class: 'me',
        class2: 'me2',
        mess: 'You are most welcome))',
        time: '2:44 pm'
    }
]
</script>

<template>
    <div class="messItem" v-for="mes in messages" :key="mes.id" :class="mes.class">
        <div class="pic">
            <i class='bx bxs-user-circle' ></i>
        </div>
        <div class="message">
            <p class="p" :class="mes.class2">{{ mes.mess }}</p>
            <p class="time">Message seen: {{ mes.time }}</p>
        </div>
        <div class="dots">
            <i class='bx bx-dots-horizontal-rounded' ></i>
        </div>
    </div>
</template>

<style scoped>
.friend{
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
}
.me{
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
}
.pic{
    width: 10%;
    height: 100px;
    color: aliceblue;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: end;
}
.message{
    width: 50%;
}
.time{
    color: rgba(255, 255, 255, .5);
    font-size: 12px;
}
.p{
    color: aliceblue;
    padding: 12px;
    font-weight: 300;
    font-size: 20px;
}
.friend2{
    background-color: var(--lab2);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
}
.me2{
    background-color: var(--lab1);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: end;
}
.dots{
    width: 50%;
    color: aliceblue;
    font-size: 40px;
    margin-left: 10px;
}
.dots:hover{
    color: var(--lab2);
    transition: .5s ease;
    cursor: pointer;
    user-select: none;
}
</style>