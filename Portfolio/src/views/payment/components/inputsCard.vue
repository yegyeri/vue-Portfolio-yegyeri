<script setup>
import {computed} from 'vue';
const props = defineProps({
    modelValue: {
        type: String,
    },
    cardName: {
        type: String,
    },
    cardMonth: {
        type: String,
    },
    cardYear: {
        type: String,
    },
    cvv: {
        type: String,
    }
});
const emit = defineEmits(['update:modelValue', 'cardName', 'cardMonth', 'cardYear']);
  
const localComputed = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
});
const twoLocalComputed = computed({
  get() {
    return props.cardName;
  },
  set(newValue) {
    emit('update:cardName', newValue)
  }
});
const threeLocalComputed = computed({
  get() {
    return props.cardMonth;
  },
  set(newValue) {
    emit('update:cardMonth', newValue)
  }
});
const fourLocalComputed = computed({
  get() {
    return props.cardYear;
  },
  set(newValue) {
    emit('update:cardYear', newValue)
  }
});
const fiveLocalComputed = computed({
  get() {
    return props.cvv;
  },
  set(newValue) {
    emit('update:cvv', newValue)
  }
});
</script>

<template>
    <div class="empty">
        
    </div>
    <div class="inputs">
        <div class="cardInput">
            <label for="cardNumber" class="cardInput__label">Card Number</label>
            <input type="text" id="cardNumber" class="cardInput__input" placeholder="#### #### #### ####" v-model="localComputed" maxlength="19" v-mask="'#### #### #### ####'">
        </div>
        <div class="cardInput">
            <label for="cardName" class="cardInput__label">Card Name</label>
            <input type="text" id="cardName" class="cardInput__input" v-model="twoLocalComputed" maxlength="25" placeholder="FULL NAME" v-mask="'AAAAAAAAAAAAAAAAAAAAAAAAA'">
        </div>
        <div class="cardTwoInput">
            <div class="cardInputTwo">
                <label for="cardMonth" class="cardInput__label">Month</label><br>
                <input type="text" id="cardMonth" class="twoInput" maxlength="2" v-model="threeLocalComputed" placeholder="MM" v-mask="'##'">
            </div>
            <div class="cardInputTwo">
                <label for="cardYear" class="cardInput__label">Year</label><br>
                <input type="text" id="cardYear" class="twoInput" maxlength="2" v-model="fourLocalComputed" placeholder="YY" v-mask="'##'">
            </div>
            <div class="cardInputTwo">
                <label for="cardCVV" class="cardInput__label">CVV</label><br>
                <input type="text" v-model="fiveLocalComputed" placeholder="###" id="cardCVV" class="twoInput" maxlength="4" v-mask="'###'">
            </div>
        </div>
    </div>
    <div class="btn">
        <button>Submit</button>
    </div>
</template>

<style scoped>
.empty{
    width: 100%;
    height: 25%;
}
.inputs {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.cardInput{
    width: 80%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    margin-bottom: 20px;
}
.cardInput__input{
    width: 100%;
    height: 30%;
    border-radius: 5px;
    border: 1px solid rgba(138, 43, 226, .5);
    padding: 10px;
    font-size: 20px;
    color: #666;
}
.cardInput__input:focus {
    outline: 0;
}
.cardInput__label{
    text-transform: uppercase;
    font-weight: 400;
    color: #666;
    margin-bottom: 5px;
}
.cardTwoInput{
    width: 80%;
    height: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.cardInputTwo{
    width: 33%;
    height: 100%;
}
.twoInput{
    width: 80%;
    height: 40%;
    border-radius: 5px;
    border: 1px solid rgba(138, 43, 226, .5);
    padding: 10px;
    font-size: 20px;
    color: #666;
    margin-top: 10px;
}
.twoInput:focus {
    outline: none;
}
.btn {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn button{
    width: 80%;
    height: 80%;
    border: none;
    background-color: blueviolet;
    border-radius: 10px;
    color: aliceblue;
    font-size: 25px;
    font-weight: 300;
}
.btn button:hover {
  background-color: #666;
  transition: .5s;
  cursor: pointer;
}
</style>