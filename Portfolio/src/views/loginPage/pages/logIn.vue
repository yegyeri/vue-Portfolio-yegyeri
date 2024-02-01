<script setup>
</script>

<template>
    <div class="logWindow">
        <img src="../png/loginRight.svg" alt="">
        Welcome!
    </div>
    <div class="inputsLog">
        <input type="email" placeholder="E-mail or Username">
        <input type="password" placeholder="Password">
        <router-link to="/login/remove" class="forgot">forgot password?</router-link>
        <button>Let's Start!</button>
        <p>SIGH WITH: <i class='bx bxl-google'></i> <i class='bx bxl-facebook' ></i> <i class='bx bxl-vk' ></i></p>
    </div>
</template>

<style scoped>
.logWindow{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    color: #3F3D56;
    gap: 20px;
}
.logWindow img{
    width: 150px;
    margin-top: 100px;
}
.inputsLog  {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
::placeholder{
    color: rgba(63, 61, 86, .7);
    font-size: 15px;
}
input {
    width: 50%;
    height: 10%;
    margin-bottom: 10px;
    border-radius: 30px;
    border: 1px solid #3F3D56;
    padding: 5px 15px;
    color: #3F3D56;
    font-size: 20px;
}
input:focus {
    border: 1px solid #3F3D56;
    border-radius: 30px;
    background-color: rgba(0, 0, 0,.1);
    outline: none;
}
.forgot{
    text-decoration: none;
    color: rgb(76, 133, 76);
    margin-left: 170px;
}
a:hover{
    user-select: none;
    cursor: pointer;
    text-decoration: underline;
    color: #3F3D56;
    transition: .3s;
}
button{
    width: 50%;
    height: 10%;
    border-radius: 30px;
    border: none;
    background-color: #50A675;
    color: aliceblue;
    font-size: 20px;
    margin-top: 20px;
}
button:hover{
    background-color: #3F3D56;
    transition: .3s;
    user-select: none;
    cursor: pointer;
}
p{
    margin-top: 30px;
    color: #3F3D56;
    font-size: 20px;
}
.bx{
    margin-left: 5px;
    padding: 5px;
    background-color: #3F3D56;
    border-radius: 50%;
    color: aliceblue;
}
.bx:hover{
    background-color: #50A675;
    cursor: pointer;
    transition: .5s;
}
</style>