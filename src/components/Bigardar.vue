<template>
    <div style="display: flex;justify-content: space-between;position:relative;margin-bottom:100px;">
        <div style="display:flex;align-items:center;justify-content:center;">
            <h1 class="slide-in-left" style="font-size: 240px;color:#DAA520">Bigårdar</h1>
            <div style="position:absolute;width:30%;left:15px;bottom:15px;">
                <p style="color:#36454F">Här hittar du information om våra bigårdar, deras placering och de unika förhållanden som gör varje bigård speciell. Utforska hur vi arbetar med biodling och hur våra bin bidrar till en hållbar och blomstrande natur.</p>
            </div>
        </div>
        <div class="slide-in-right">
            <img style="height:70vh; width:30vw; object-fit: cover;margin-top:100px;margin-right:15px;" src="../assets/bigardar.jpg">
        </div>
    </div>
    <div class="bigard-wrapper" v-for="(bigard, index) in bigards" :key="bigard.name" v-if="bigards">
    <!-- Check if index is even or odd to alternate the order -->
    <template v-if="index % 2 === 0">
        <!-- Order for even index (0, 2, 4, ...) -->
        <div class="image-wrapper">
            <img :src="bigard.image">
        </div>
        <div>
            <h1 style="font-size:120px; color:#DAA520">{{ bigard.name }}</h1>
            <p>{{ bigard.description }}</p>
        </div>
    </template>
    <template v-else>
        <!-- Order for odd index (1, 3, 5, ...) -->
        <div>
            <h1 style="font-size:120px; color:#DAA520">{{ bigard.name }}</h1>
            <p>{{ bigard.description }}</p>
        </div>
        <div class="image-wrapper">
            <img :src="bigard.image">
        </div>
    </template>
</div>

</template>

<script>
import contentfulClient from '../contentfulClient';
export default {
    data() {
        return {
            bigards: [],
        };
    },
    mounted() {
        this.fetchBigards();
    },
    methods: {
        async fetchBigards() {
            try {
                const response = await contentfulClient.getEntries({
                    content_type:'locations',
                    order: 'sys.updatedAt'
                });
                this.bigards = response.items.map(item => {
                const fields = item.fields;
                // Format image URLs if 'image' field exists
                if (fields.image && fields.image.fields.file) {
                    fields.image = fields.image.fields.file.url;
                }

                return fields;
                });
                console.log(response.items);
                console.log(this.bigards);
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<style scoped>
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
</style>
