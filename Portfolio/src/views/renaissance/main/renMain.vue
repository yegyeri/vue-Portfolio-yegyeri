<script setup>
import sliderPhotos from './sliderPhotos.vue'
import profileInfo from './profileInfo.vue'
</script>

<template>
    <div class="main">
        <div class="leftMain">
            <profileInfo/>
        </div>
        <div class="rightMain">
            <sliderPhotos />
        </div>
    </div>
</template>

<style scoped>
.main {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.leftMain {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.rightMain {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    overflow: hidden;
}

</style>