<script setup>

</script>

<template>
    <div class="slider">
        <img id="slide-1" src="../png.svg/2.jpg" class="galleryPhoto" alt="">
        <img id="slide-2" src="../png.svg/3.jpg" class="galleryPhoto" alt="">
        <img id="slide-3" src="../png.svg/4.jpg" class="galleryPhoto" alt="">
    </div>
    <div class="slider-nav">
        <a href="#slide-1"></a>
        <a href="#slide-2"></a>
        <a href="#slide-3"></a>
    </div>
</template>


<style scoped>
.slider {
    display: flex;
    width: 800px;
    height: 70%;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overflow-x: hidden;
}
.galleryPhoto {
    flex: 1 0 100%;
    scroll-snap-align: start;
    object-fit: cover;
    width: 790px;
    border: 2px solid #666;
    border-radius: 20px;
    opacity: 70%;
}
.slider-nav {
    width: 100px;
    height: 50px;
    display: flex;
    column-gap: 1rem;
    position: absolute;
    margin-left: 150px;
    margin-bottom: 500px;
    transform: translateX(-50%);
    z-index: 1;
}
.slider-nav a {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.75;
    transition: opacity ease 250ms;
}
.slider-nav a:hover {
    opacity: 1;
}
</style>