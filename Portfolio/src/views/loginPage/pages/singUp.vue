<script setup>
</script>

<template>
    <div class="sign">
        <h2>Sign Up</h2>
        <input class="inp" type="text" maxlength="15" placeholder="Username">
        <input class="inp" type="text" maxlength="25" placeholder="E-mail">
        <input class="inp" type="text" v-mask="'#(###)###-##-##'" placeholder="Your Phone">
        <input class="inp" type="text" maxlength="20" placeholder="Password">
        <input class="inp" type="text" maxlength="20" placeholder="Confirm Password">
        <div class="privacy">
            <input type="checkbox" name="" id="">
            <p>I Agree with <a href="#">privacy</a> and <a href="#">policy</a></p>
        </div>
        <button>Sign up</button>
    </div>
</template>

<style scoped>
::placeholder{
    color: rgba(63, 61, 86,.6);

}
.sign {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
}
.privacy{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
}
.inp{
    width: 50%;
    height: 5%;
    padding: 10px 10px 10px 20px;
    border-radius: 30px;
    border: 1px solid rgba(63, 61, 86,.8);
    color: rgba(63, 61, 86,.8);
    font-size: 17px;
    @media (max-width: 512px) {
        width: 70%;
    }
    @media (max-width: 320px) {
        width: 70%;
    }
}
.inp:focus{
    border: 1px solid rgba(80, 166, 117,.7);
    outline: none;
    background-color: rgba(51, 65, 52, 0.1);
}
.privacy p{
    color: #3F3D56;
}
a{
    text-decoration: none;
    color: #50A675;
}
a:hover{
    text-decoration: underline;
    color: #3F3D56;
    transition: .3s ease;
}
button{
    width: 300px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-color: #50A675;
    color: aliceblue;
    font-size: 20px;
    @media (max-width: 320px) {
        width: 150px;
    }
}
button:hover{
    background-color: #3F3D56;
    transition: .5s ease;
    user-select: none;
    cursor: pointer;
}
h2{
    font-weight: 400;
    color: #3F3D56;
}
</style>