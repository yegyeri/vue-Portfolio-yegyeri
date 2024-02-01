<script setup>
</script>

<template>
    <div class="pic">
        <i class='bx bxs-user-circle' ></i>
    </div>
    <div class="name">
        <h2>Aris Christofi</h2>
        <p><i class='bx bxs-circle' ></i>Online</p>
    </div>
    <div class="call">
        <i class='bx bx-phone-call' ></i>
        <i class='bx bx-video' ></i>
    </div>
</template>

<style scoped>
.pic{
    height: 100%;
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    color: aliceblue;
    cursor: pointer;
    user-select: none;
}
.name{
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    cursor: pointer;
    user-select: none;
}
.name h2{
    color: aliceblue;
    font-weight: 500;
    font-size: 30px;
}
.bxs-circle{
    color: rgb(130, 253, 130);
    margin-right: 4px;
}
.name p {
    color: aliceblue;
    font-weight: 300;
    font-size: 15px;
}
.call{
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 35px;
    color: var(--lab2);
}
.call .bx:hover{
    color: aliceblue;
    transition: .5s ease;
    cursor: pointer;
    user-select: none;
}
</style>