<script setup>
</script>

<template>
    <div class="other">
        <div class="leftOther">
            <h2>CHECK</h2>
            <p>OTHER<br>PRODUCTS</p>
        </div>
        <div class="rightOther">
            <i class='bx bx-chevrons-right' ></i>
        </div>
    </div>
    <div class="otherProducts">
        <div class="product">
            <div class="imgHood">
                <img src="../png/blueH.png" alt="">
            </div>
            <div class="hood">
                <h2>HOODIE</h2>
                <p>UNISEX</p>
                <div class="stars">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
                <p>13.99$</p>
                <button>BUY +</button>
            </div>
        </div>
        <div class="product">
            <div class="imgHood">
                <img src="../png/greenH.png" alt="">
            </div>
            <div class="hood">
                <h2>HOODIE</h2>
                <p>UNISEX</p>
                <div class="stars">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i>
                </div>
                <p>13.99$</p>
                <button>BUY +</button>
            </div>
        </div>
        <div class="product">
            <div class="imgHood">
                <img src="../png/blackH.png" alt="">
            </div>
            <div class="hood">
                <h2>HOODIE</h2>
                <p>UNISEX</p>
                <div class="stars">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i>
                    <i class='bx bx-star' ></i>
                </div>
                <p>12.99$</p>
                <button>BUY +</button>
            </div>
        </div>
        <div class="product">
            <div class="imgHood">
                <img src="../png/whieH.png" alt="">
            </div>
            <div class="hood">
                <h2>HOODIE</h2>
                <p>UNISEX</p>
                <div class="stars">
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star' ></i>
                    <i class='bx bxs-star-half' ></i>
                    <i class='bx bx-star' ></i>
                    <i class='bx bx-star' ></i>
                </div>
                <p>17.49$</p>
                <button>BUY +</button>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.other {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.leftOther {
    color: aliceblue;
    font-weight: 300;
    font-size: 30px;
}
.rightOther {
    color: aliceblue;
    font-size: 90px;
}
.otherProducts {
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
}
.product {
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product:hover .imgHood {
    margin-right: 190px;
    transition: .5s ease;
}
.imgHood {
    width: 150px;
    height: 100px;
    position: absolute;
    margin-right: 160px;
}
.imgHood img {
    width: 150px;
    filter: brightness(120%);
}
.hood {
    width: 300px;
    height: 150px;
    background-color: rgba(240, 248, 255, .7);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;
}
.hood h2{
    margin-right: 20px;
    color: rgba(0, 0, 0, .8);
    margin-top: 10px;
}
.hood p{
    margin-right: 20px;
    color: rgba(0, 0, 0, .8);
}
.hood Button {
    border: none;
    width: 70px;
    height: 35px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, .8);
    color: aliceblue;
    margin-right: 15px;
    margin-top: 10px;
    cursor: pointer;
    user-select: none;
}
.hood button:hover {
    background-color: aliceblue;
    color: black;
    transition: .5s;
}
.stars {
    color: rgb(220, 220, 60);
    margin-right: 20px;
}
</style>