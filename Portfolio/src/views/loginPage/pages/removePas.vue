<script setup>
import { ref } from 'vue';
const visible = ref(false)
</script>

<template>
    <div class="inputNum">
        <div class="phone">
            <p>Write your phone number:</p>
            <input type="text" v-mask="'#(###)###-##-##'" placeholder="8(    )   -  -">
            <button v-on:click="visible=!visible">Send Code</button>
        </div>
        <div class="code" v-if="visible">
            <p>We send a code on your phone,<br>Please write code:</p>
            <input type="text" v-mask="'####'" placeholder="####">
            <button>Send</button>
        </div>
    </div>
</template>

<style scoped>
::placeholder{
    color: rgba(63, 61, 86, .5);
}
.inputNum{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.code{
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 50px;
}
.code input{
    width: 10%;
    height: 5%;
    padding: 15px;
    border-radius: 30px;
    font-size: 20px;
    color: rgba(63, 61, 86, .8);
    border: 1px solid #3F3D56;
    @media (max-width: 320px) {
        width: 30%;
    }
}
.code input:focus{
    outline: none;
    border: 1px solid #3F3D56;
}
.phone{
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.phone input{
    width: 35%;
    height: 5%;
    padding: 20px;
    border-radius: 30px;
    border: 1px solid #3F3D56;
    font-size: 20px;
    color: rgba(63, 61, 86, .8);
    @media (max-width: 320px) {
        width: 60%;
    }
}
.phone input:focus{
    outline: none;
    border: 1px solid #3F3D56;
}
p{
    color: #3F3D56;
    font-weight: 400;
    text-align: center;
    font-size: 25px;
    @media (max-width: 320px) {
        font-size: 20px;
    }
}
button{
    width: 300px;
    height:40px;
    border-radius: 20px;
    border: none;
    background-color: #50A675;
    color: aliceblue;
    font-size: 20px;
    font-weight: 300;
    user-select: none;
    cursor: pointer;
    @media (max-width: 320px) {
        width: 70%;
    }
}
button:hover{
    background-color: #3F3D56;
    transition: .5s ease;
}
</style>