<template>
    <div class="products-hero">
        <img src="../assets/honeyjars_hero.jpg">    

    <div class="text-overlay">
        <div class="line-wrapper">
            <h1 style="letter-spacing: 0.1em; margin:0;font-size:24px;color:white;">Våra</h1>
        </div>
        <h2 class="products-title">Produkter</h2>
    </div>
    </div>
    <div class="products-container">
        <div class="products-list-container">
            <div class="product-container">
                <h2 class="product-title">*HÄSSELBY*</h2>
                <img class="product-image" src="../assets/products/honeyjar.png">
                <p class="product-description">Har en frisk smak med ton av apelsin och grapefrukt. Nektarn som givit honungen dess unika smak kommer från växterna i villaträdgårdar, ängar och skog kring vår hemmabigård på Lupinvägen i Hässelby.</p>
            </div>
            <div class="product-container">
                <h2 class="product-title">*LÅNGHOLMEN*</h2>
                <img class="product-image" src="../assets/products/honeyjar.png">
                <p class="product-description">Har en blommig smak med stor kropp. Nektarn som givit honungen dess unika smak kommer från odlingar och växter i trädgårdarna kring vår bigård på Långholmens Koloniträdgårdar.</p>
            </div>
            <div class="product-container">
                <h2 class="product-title">*HAGA*</h2>
                <img class="product-image" src="../assets/products/honeyjar.png">
                <p class="product-description">Har en mycket frisk smak med en fin ton av lind som påminner om mint. Nektarn som givit honungen dess unika smak kommer från växterna kring vår bigård vid Fjärilshuset i Hagaparken.</p>
            </div>
            <div class="product-container">
                <h2 class="product-title">Gammeldags flytande honung</h2>
                <img class="product-image" src="../assets/products/honeyjar.png">
                <p class="product-description">Finns endast tillgänglig under sommaren direkt efter skörd. Houng som är flytande en kortare tid. En delikatess under säsong och bör njutas som den primör den är. Förr eller senare kristalliseras den och får då en kornig och fastare konsistens. Förvaras i rumstemperatur,  ej i direkt solljus eller om man vill spara och njuta längre fram går den bra att frysa in den, flytande precis som den är i sin burk.</p>
            </div>
            <div class="product-container">
                <h2 class="product-title">RÖRD Fast Honung</h2>
                <img class="product-image" src="../assets/products/honeyjar.png">
                <p class="product-description">Finns i flera olika sorter. Kristalliseringen är styrd, utan att påverka innehåll eller smak, för att få en konsistens som är mjuk, slät och bredbar. Förvaras svalt i jämn temperatur.</p>
            </div>
            <div class="product-container">
                <h2 class="product-title">RAW Rå Fast Honung</h2>
                <img class="product-image" src="../assets/products/honeyjar.png">
                <p class="product-description">Finns i flera olika sorter. Varsamt behandlad honung som varit flytande men som nu självkristalliserats. Honungen har fått en naturlig, kornig och fast konsistens. Kristalliserad honung kan värmas försiktigt för att bli flytande igen.Förvaras svalt i jämn temperatur.</p>
            </div>
            <div class="product-container">
                <h2 class="product-title">Kakhonung</h2>
                <img class="product-image" src="../assets/products/honeyjar.png">
                <p class="product-description">Begränsat utbud under sommaren. Kakhonung eller jungfruhonung kallas honung som kan ätas obehandlad i vaxkakan. Vaxkakan tuggas och vaxresterna spottas ut. Så åt man honung förr och gör fortfarande i många kulturer. Vi människor kan inte smälta bivaxet i magen men det är ofarligt att svälja.</p>
            </div>
            <div class="product-container">
                <h2 class="product-title">Flera olika sorter</h2>
                <img class="product-image" src="../assets/products/honeyjar.png">
                <p class="product-description">Flytande, Rörd och Raw från bigårdarna: *HÄSSELBY* *LÅNGHOLMEN* *HAGA* </p>
            </div>
            <div class="product-container">
                <h2 class="product-title">JUNGFRUBIVAX</h2>
                <img class="product-image" src="../assets/products/honeyjar.png">
                <p class="product-description">Nyproducerat Svenskt avtäckningsvax som har tvättats och rensats. Den är producerad till 100% av bin från våra egna bigårdar. Jungfruvax kan användas till salvor, krämer, bivaxdukar m.m.</p>
            </div>
        </div>
    </div>
</template>
<script>
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
.products-container{
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
}
.product-container {
    width:30%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    .product-title {
        text-transform:uppercase;
    }
    .product-description {
        width:60%;
        font-size:14px;
    }
    .product-image {
        border-radius:15px;
        height:250px;
    }
    .product-image:hover {
        transform:scale(1.1);
    }
}
.line-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.line-wrapper::before,
.line-wrapper::after {
  content: '';
  flex: 1;
  height: 2px; /* Adjust height as needed */
  background-color: white; /* Line color */
}

.line-wrapper::before {
  margin-right: 10px; /* Space between line and text */
}

.line-wrapper::after {
  margin-left: 10px; /* Space between line and text */
}
</style>