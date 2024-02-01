<script setup>
import { ref } from 'vue';
const infoDrop = ref(false)
</script>

<template>
    <div class="personInfo">
        <div class="person">
            <i class='bx bxs-user-circle' ></i>
            <h2>Aris Christofi</h2>
            <p>Admin</p>
        </div>
        <div class="info">
            <div class="infoUp" @click="infoDrop = !infoDrop">
                <p>Personal Information </p><i class='bx bx-chevron-down' ></i>
            </div>
        </div>
        <div class="infoDown" v-if="infoDrop">
                <p><i class='bx bx-envelope' ></i> Support@whelp.com</p>
                <p><i class='bx bx-phone' ></i> +7(962)543-72-78</p>
                <p><i class='bx bx-time' ></i> Mon - Fri: 09 am - 06 pm</p>
            </div>
        <div class="tag">
            <p><i class='bx bx-purchase-tag-alt' ></i>Add Tag</p><i class='bx bx-dots-horizontal-rounded'></i>
        </div>
        <div class="rating">
            <p><i class='bx bx-star' ></i>Chat Rating</p><i class='bx bx-dots-horizontal-rounded'></i>
        </div>
    </div>
</template>

<style scoped>
.personInfo{
    height: 100%;
    width: 600px;
    background-color: var(--lab1-1);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}
.person{
    width: 80%;
    height: 300px;
    background-color: var(--lab1);
    margin-top: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.person i{
    font-size: 180px;
    color: aliceblue;
}
.person h2{
    font-weight: 500;
    font-size: 30px;
    color: aliceblue;
}
.person p{
    color: rgba(255, 255, 255,.5);
    font-weight: 300;
    font-size: 20px;
}
.info{
    width: 65%;
    height: 60px;
    margin-top: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.infoUp{
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgba(255, 255, 255,.5);
    font-size: 25px;
    background-color: var(--lab1);
    border-radius: 10px;
}
.infoDown{
    width: 380px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: start;
    color: rgba(255, 255, 255,.5);
    font-size: 25px;
    background-color: var(--lab1);
    border-radius: 10px;
    margin-top: 20px;
    transition: 1s;
    user-select: none;
}
.infoDown p{
    margin-left: 20px;
}
.infoDown p i{
    margin-right: 10px;
}
.infoUp:hover{
    color: var(--lab2);
    cursor: pointer;
    user-select: none;
    transition: .5s ease;
}
.infoUp i {
    font-size: 35px;
}
.tag{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    height: 60px;
    background-color: var(--lab1);
    margin-top: 20px;
    border-radius: 10px;
    color: rgba(255, 255, 255,.5);
    font-size: 25px;
    font-weight: 300;
    padding: 5px 20px 5px 20px;
    cursor: pointer;
    user-select: none;
}
.tag p i{
    margin-right: 15px;
}
.tag:hover p{
    color: aliceblue;
    transition: .5s ease;
}
.tag:hover p i {
    color: var(--lab2);
    transition: .5s ease;
}
.rating{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    height: 60px;
    background-color: var(--lab1);
    margin-top: 20px;
    border-radius: 10px;
    color: rgba(255, 255, 255,.5);
    font-size: 25px;
    font-weight: 300;
    padding: 5px 20px 5px 20px;
    cursor: pointer;
    user-select: none;
}
.rating p i{
    margin-right: 15px;
}
.rating:hover p{
    color: var(--lab2);
    transition: .5s ease;
}
.rating:hover p i {
    color: aliceblue;
    transition: .5s ease;
}
</style>