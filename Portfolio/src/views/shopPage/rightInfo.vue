<script setup>
import colorSelect from './';
</script>

<template>
    <div class="leftDiv">
        <div class="selectors">
            <div class="color_select">
                <colorSelect />
            </div>
        </div>
    </div>
    <div class="rightDiv">

    </div>

    
</template>

<style scoped>
    .leftDiv{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .rightDiv{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

</style>