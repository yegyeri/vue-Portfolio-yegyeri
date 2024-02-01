<script setup>
import chatItems from './chatItems.vue';
</script>

<template>
    <div class="chatList">
        <div class="head">
            <h2>Conversation</h2>
            <div class="search">
                <i class='bx bx-search' ></i>
                <input type="text" placeholder="Search here">
            </div>
            <div class="footer">
                <p>Recent Chats <i class='bx bx-chevron-down' ></i></p>
                <p>New Chats <i class='bx bx-chevron-down' ></i></p>
            </div>
        </div>
        <div class="chatItems">
            <chatItems />
        </div>
    </div>
</template>

<style scoped>
::placeholder{
    color: rgba(240, 248, 255, .3);
    font-size: 13px;
}
.chatList{
    height: 100%;
    width: 500px;
    background-color: var(--lab1-1);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
.head{
    width: calc(100% - 60px);
    height: 10%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 10px;
}
.head h2{
    color: aliceblue;
    font-weight: 400;
    font-size: 30px;
}
.search{
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 30px;
    padding: 5px 10px 5px 10px;
    border: 1px solid rgba(255,255,255,.2);
    border-radius: 5px;
    gap: 10px;
}
.search .bx{
    color: rgb(207, 207, 207);
    font-size: 30px;
}
.search input{
    padding: 5px;
    width: 350px;
    background-color: var(--lab1-1);
    border: none;
    color: aliceblue;
    font-size: 15px;
}
.search input:focus{
    outline: none;
}
.footer{
    color: aliceblue;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.chatItems{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
</style>