<script setup>
</script>

<template>
    <div class="footer">
        <div class="slider">
            <i class='bx bx1 bx-right-arrow-alt bx-flip-horizontal'></i>
            <i class='bx bx2 bx-dots-horizontal-rounded bx-flip-horizontal'></i>
            <i class='bx bx1 bx-left-arrow-alt bx-flip-horizontal'></i>
        </div>
        <div class="addShare">
            <button>ADD TO COLLECTION</button>
            <i class='bx bx1 bx-share-alt'></i>
        </div>
    </div>
</template>

<style scoped>
.footer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.slider {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 70px;
    align-items: center;
}
.bx1 {
    font-size: 25px;
    color: aliceblue;
    padding: 15px;
    border: 1px solid #fff;
    border-radius: 50%;
}
.bx2  {
    font-size: 30px;
    color: aliceblue;
    padding: 15px;
    border-radius: 50%;
}
.bx1:hover {
    color: antiquewhite;
    transition: .5s;
    border: 1px solid antiquewhite;
    cursor: pointer;
}
.addShare {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
button {
    background: none;
    border: 1px solid #fff;
    color: aliceblue;
    width: 300px;
    height: 55px;
    font-weight: 300;
    font-size: 20px;
    border-radius: 50px;
}
button:hover {
    border: 1px solid antiquewhite;
    color: antiquewhite;
    transition: .5s;
    cursor: pointer;
}
</style>