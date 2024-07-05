<template>
    <div class="bigardar-hero-wrapper">
        <div class="bigardar-hero-text-wrapper">
            <h1 class="slide-in-left bigard-hero-text-title">Bigårdar</h1>
            <div  class="bigard-hero-info-wrapper">
                <p>Här hittar du information om våra bigårdar, deras placering och de unika förhållanden som gör varje bigård speciell. Utforska hur vi arbetar med biodling och hur våra bin bidrar till en hållbar och blomstrande natur.</p>
            </div>
        </div>
        <div class="slide-in-right">
            <img class="bigard-hero-image" src="../assets/bigardar.jpg" loading="lazy">
        </div>
    </div>
    <div class="bigard-wrapper" v-for="(bigard, index) in bigards" :key="bigard.name" v-if="bigards">
        <template v-if="index % 2 === 0">
            <div class="image-wrapper">
                <img :src="bigard.image" loading="lazy">
            </div>
            <div class="bigard-text">
                <h1 class="bigard-title">{{ bigard.name }}</h1>
                <p>{{ bigard.description }}</p>
            </div>
        </template>
        <template v-else>
            <!-- Order for odd index (1, 3, 5, ...) -->
            <div class="bigard-text">
                <h1 class="bigard-title">{{ bigard.name }}</h1>
                <p>{{ bigard.description }}</p>
            </div>
            <div class="image-wrapper">
                <img :src="bigard.image">
            </div>
        </template>
    </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['bigards'])
    },
    mounted() {
        this.fetchBigards();
    },
    methods: {
        ...mapActions(['fetchBigards'])
    }
};
</script>

<style scoped>
@media(max-width:768px) {
    .bigardar-hero-wrapper{
        display:flex;
        flex-direction: column-reverse;
        margin-bottom:50px;
        width:100%;
    }
    .bigard-hero-text-wrapper {
    }
    .bigard-hero-text-title {
        font-size:72px;
        text-align:center;
        color:#DAA520;
    }
    .bigard-hero-info-wrapper {
        font-size:16px;
        padding:10px;
        margin:5p;
        color:#36454F;
    }
    .bigard-hero-image {
        height:30vh;
        object-fit:cover;
        width:100%;
    }
    .bigard-wrapper {
        display:flex;
        margin-bottom:25px;
        height:200px;
    }
    .bigard-text {
        padding:10px;
        h1 {
            color:#DAA520;
            text-align: center;
            font-size: 24px;
        }
        p {
            font-size:14px;
        }
    }
    .image-wrapper {
        img {
            width:30vw;
            height:100%;
            object-fit:cover;
            margin-right:5px;
            margin-left: 5px;
        }
    }
}
@media(min-width:769px){
    .bigardar-hero-wrapper {
        display: flex;
        justify-content: space-between;
        position:relative;
        margin-bottom:100px;
        .bigardar-hero-text-wrapper {
            display:flex;
            align-items:center;
            justify-content:center;
            .bigard-hero-text-title {
                font-size: 240px;color:#DAA520
            }
            .bigard-hero-info-wrapper {
                position:absolute;
                width:30%;
                left:15px;
                bottom:15px;
                color:#36454F;
            }
        }
        .bigard-hero-image {
            height:70vh;
            width:30vw;
            object-fit: cover;
            margin-top:100px;
            margin-right:15px;
        }
    }
    .image-wrapper {
        img {
            height: 600px;
        }
    }

    .bigard-wrapper {
        display: flex;
        align-items: center;
        color: #36454F;
        margin-bottom: 50px; /* Optional: Add margin between each section */
        padding: 20px; /* Add padding to create space around the content */
    }
    .bigard-title {
        font-size:120px;
        color:#DAA520;
    }
    .bigard-wrapper > div {
        flex: 1; /* Take up remaining space */
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px; /* Add margin between image and text */
    }

    .image-wrapper {
        flex: 1;
        display: flex;
        justify-content: center; /* Center align image horizontally */
        align-items: center; /* Center align image vertically */
    }

    .image-wrapper img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover; /* Maintain aspect ratio and cover container */
    }
}
    
</style>
