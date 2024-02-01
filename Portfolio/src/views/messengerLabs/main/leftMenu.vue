<script setup>
const menues = [
    {
        id: '1',
        class: 'bx-home-alt',
    },
    {
        id: '2',
        class: 'bx-message-alt-dots',
    },
    {
        id:'3',
        class: 'bxs-contact'
    },
    {
        id:'4',
        class: 'bx-tv'
    },
    {
        id:'5',
        class: 'bxs-zap'
    }
]
</script>

<template>
    <div class="leftMenu">
        <i class='bx' v-for="menu in menues" :key="menu.id" :class="menu.class"></i>
    </div>
</template>

<style scoped>
.leftMenu{
    height: 100%;
    width: 80px;
    background-color: var(--lab1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-bottom: 350px;
}
.bx{
    color: rgb(207, 207, 207);
    font-size: 30px;
}
.bx:hover{
    color: var(--lab2);
    transition: .5s ease;
    cursor: pointer;
    user-select: none;
}
.bx-message-alt-dots{
    color: var(--lab2);
}
</style>