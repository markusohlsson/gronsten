<template >
    <div style="display: flex;justify-content: space-between;position:relative;margin-bottom:100px;">
        <div class="slide-in-left">
            <img style="height:70vh; width:30vw; object-fit: cover;margin-top:100px;margin-left:15px;" src="../assets/honeyjars_hero.jpg">
        </div>
        <div style="display:flex;align-items:center;justify-content:center; margin-right:20px;">
            <h1 class="slide-in-right" style="font-size: 240px;color:#DAA520">Produkter</h1>
            <div style="position:absolute;width:30%;right:20px;;bottom:15px;">
                <p style="color:#36454F">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem asperiores ex perferendis quia quisquam expedita ipsam voluptatibus. Ex ut quidem tempora quos qui cupiditate asperiores quisquam minus ratione praesentium.</p>
            </div>
        </div>
    </div>
    <div class="products-container" v-if="products">
        <div class="products-list-container">
            <div  class="product-container" v-for="product in products" :key="product.id">
                <h2 class="product-title">{{product.title}}</h2>
                <img class="product-image" :src="product.image">
                <p class="product-description">{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import contentfulClient from '../contentfulClient';
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'product',
          order: 'sys.updatedAt'
        });

        this.products = response.items.map(item => {
          const fields = item.fields;

          // Format image URLs if 'image' field exists
          if (fields.image && fields.image.fields.file) {
            fields.image = fields.image.fields.file.url;
          }

          return fields;
        });
      } catch (error) {
        console.error('Error while fetching entries:', error);
      }
    },
  },
};
</script>
<style scoped>
.text-overlay {
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%;
  transform: translate(-50%, -50%); /* Center horizontally and adjust for height */
  text-align: center;
  color: white; /* Adjust text color as needed */
  z-index: 1; /* Ensure text overlay stays above the video */
}

.products-hero {
    position:relative;
    img {
        object-fit: cover;
        height:80vh;
        width:100%;
    }
}


.products-title {
    letter-spacing: 0.1em;
    font-size:64px;
    color:#cba333;
    text-shadow: #0f0f0f 2px 2px 2px;
    padding:2px;
}

.products-list-container {
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    justify-content: center;
    margin:15px;
    padding:15px;
    margin-bottom:50px;
}

.product-container {
    margin-top:10px;
    width:30%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
}

.product-title {
    text-transform: uppercase;
}

.product-description {
    width: 60%;
    font-size: 14px;
}

.product-image {
    border-radius: 15px;
    height: 250px;
}

.product-image:hover {
    transform: scale(1.1);
}
</style>