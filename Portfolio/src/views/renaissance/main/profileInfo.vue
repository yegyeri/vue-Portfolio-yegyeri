<script setup>

</script>

<template>
    <div class="head">
        <h1>INTERIOR<br> OF A <br>CATHEDRAL</h1>
        <p>Lorem ipsum dolor sit<br> amet consectetur adipisicing elit. <br>Ratione eius inventore fugiat <br>consequatur nisi laborum.</p>
    </div>
    <div class="profileAutor">
        <img src="../png.svg/Alma.jpg" class="autorPic" alt="">
        <h2>ALMA-TADEMA<br>LAWRENCE</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus assumenda ducimus exercitationem laborum tempora autem quae quod maiores ea aut.</p>
    </div>
</template>

<style scoped>
    .head {
        width: 100%;
        height: 30%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .head h1{
        color: aliceblue;
        font-weight: 300;
        font-size: 90px;
        line-height: 0.9;
        margin-left: 50px;
        margin-top: 100px;
    }
    .head p{
        text-align: end;
        color: antiquewhite;
        font-weight: 300;
        font-size: 20px;
    }
    .profileAutor {
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .autorPic {
        width: 200px;
        border: 1px solid antiquewhite;
        border-radius: 20px;
        margin-left: 60px;
    }
    .profileAutor h2{
        padding: 20px;
        width: 900px;
        color: aliceblue;
        font-weight: 300;
        font-size: 30px;
        margin-bottom: 200px;
    }
    .profileAutor p{
        text-align: end;
        color: antiquewhite;
        font-weight: 300;
        font-size: 20px;
    }
</style>