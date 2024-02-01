<script setup>

</script>

<template>
    <div class="header">
        <div class="menu">
            <i class='bx bx-menu bx-flip-horizontal'></i>
            <h3>ART</h3>
            <p>OTHER  AUTORS</p>
        </div>
        <div class="nameGallery">
            <p>DIGITAL-GALLERY</p>
        </div>
        <div class="profile">
            <div class="coll"><p>COLLECTION</p><i class='bx bxs-collection' ></i></div> 
            <img src="../png.svg/111.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.header {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.menu {
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: aliceblue;
    font-weight: 300;
}
.menu  i {
    font-size: 60px;
    cursor: pointer;
}
.menu  i:hover {
    color: antiquewhite;
    transition: .5s;
}
.menu h3, .menu p {
    font-size: 20px;
}
.menu h3:hover, .menu p:hover {
    text-decoration: underline;
    color: antiquewhite;
    transition: .5s;
    cursor: pointer;
}
.nameGallery {
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nameGallery p{
    color: aliceblue;
    font-weight: 300;
    font-size: 20px;
}
.profile {
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-right: 20px;
    color: aliceblue;
    font-size: 20px;
    gap: 10px;
}
.profile .bx {
    font-size: 35px;
}
.profile img {
    width: 55px;
    height: 55px;
    border: 2px solid #fff;
    border-radius: 50%;
}
.profile img:hover {
    opacity: 70%;
    transition: .5s;
    cursor: pointer;
}
.coll {
    width: 50%;
    height: 100%;
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.coll:hover {
    color: antiquewhite;
    transition: .5s;
    cursor: pointer;
}
</style>