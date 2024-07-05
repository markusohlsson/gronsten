<template>

    <div class="products-hero-wrapper">
        <div class="slide-in-left">
            <img class="products-hero-image" src="../assets/honeyjars_hero.jpg" loading="lazy">
        </div>
        <div class="products-hero-text-wrapper">
            <h1 class="slide-in-right product-hero-text-title">Produkter</h1>
            <div class="product-hero-text-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem asperiores ex perferendis quia quisquam expedita ipsam voluptatibus. Ex ut quidem tempora quos qui cupiditate asperiores quisquam minus ratione praesentium.</p>
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
import { mapState, mapActions } from 'vuex';

export default {
    computed: {
        ...mapState(['products'])
    },
    mounted() {
        this.fetchProducts();
    },
    methods: {
        ...mapActions(['fetchProducts'])
    }
};
</script>
<style scoped>
    @media (max-width:768px) {
      .products-hero-wrapper {
        display:flex;
        margin-bottom:50px;
        position:relative;
        flex-direction: column;
        width:100%;
        .products-hero-text-wrapper {
          .product-hero-text-title {
            font-size: 72px;
            text-align: center;
            color:#DAA520;
          }
          .product-hero-text-container {
            font-size:16px;
            padding:10px;
            margin:5px;
            color:#36454F;
          }

        }
      }
      .products-hero-image {
        height:30vh;
        object-fit:cover;
        width:100%;
      }

      .product-image {
        height:100px;
        object-fit:contain;
      }

      .products-list-container {
        display:flex;
        flex-wrap:wrap;
        justify-content: flex-start;
        margin-bottom:100px;
        .product-container {
          margin-top:15px;
          width:50%;
          text-align: center;
          display:flex;
          flex-direction:column;
          gap:10px;
          .product-title {
            font-size:16px;
            text-transform: uppercase;
          }
          .product-description {
            padding:10px;
            font-size:12px;
          }
        }
      }
    }
    @media (min-width:769px) {
    .products-hero-wrapper {
      display: flex;
      justify-content: space-between;
      position:relative;
      margin-bottom:100px;
      .products-hero-image {
        height:70vh; 
        width:30vw; 
        object-fit: cover;
        margin-top:100px;
        margin-left:15px;
      }
      .products-hero-text-wrapper {
        display:flex;
        align-items:center;
        justify-content:center; 
        margin-right:20px;
        .product-hero-text-title {
          font-size: 240px;
          color:#DAA520;
        }
        .product-hero-text-container {
          position:absolute;
          width:30%;
          right:20px;
          bottom:15px;
          color:#36454F;
        }
      }
    }
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
}
</style>