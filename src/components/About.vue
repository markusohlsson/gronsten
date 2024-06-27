<template>
    <div class="about-hero">
        <img src="../assets/beekeepers.jpg">    
    </div>
    <div class="about_container">
        <div class="top-title">
            <div class="line-wrapper">
                <h1 class="about-title">Grönstenen Biodling</h1>
            </div>
            <p class="about-info">Grönstenen Biodling drivs av Pontus och Anna Hallström. Vi har idag fem bigårdar och vår hemmabigård har vi i villaträdgården i Hässelby Villastad.</p>
        </div>
        <div class="about_container_first">
            <img class="about-image" src="../assets/bigard_1.jpg"/>
        <div class="about_container_first_text">
            <div class="line-wrapper wrapper-white">
                <h2 class="about-title-list">Vi på Grönstenen Biodling:</h2>
            </div>
            <ul class="about-list">
                <li><span>Bidrar till pollineringen av växterna kring våra bigårdar samtidigt som vi producerar en god och nyttig honung.</span></li>
                <li>Värmebehandlar inte vår honung, vare sig den flytande eller fasta.</li>
                <li>Vingklipper inte våra drottningar.</li>
                <li>Behandlar våra bin mot sjukdomar och skadedjur med ekologiska metoder.</li>
                <li>Använder övervägande trämaterial i våra kupor.</li>
                <li>Tillverkar våra bikupor själva, använder svenskt trä, skyddar utsidan med svensk rå kallpressad linolja och vattenlöslig akrylatfärg.</li>
            </ul>
        </div>
        </div>
    </div>
    <!-- <div style="float:left;">
    <div class="hex-row">
      <div class="hex">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
      <div class="hex">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
      <div class="hex">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </div>
    <div class="hex-row even">
      <div class="hex">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
      <div class="hex">
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
    </div>
  </div> -->
</template>

<script>
</script>

<style scoped>
.about-hero {
    img {
        object-fit: cover;
        height:80vh;
        width:100%;
    }
}
.top-title {
    width: 60%;
    text-align: center;
    padding-bottom:15px;
}
.about-title {
    letter-spacing: 0.1em;
    font-size:36px;
    color:#cba333;
    text-shadow: #0f0f0f 2px 2px 2px;
    padding:2px;
}
.about-image {
    border-radius:15px;
    height:300px;
    margin:auto;
}
    .about_container {
        padding-top:25px;
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
        padding-bottom:25px;
    }
    .about_container_first {
        display:flex;
        justify-content: space-evenly;
    }
    .about_container_first_text {
        width:50%;
        text-align: center;
    }
    .about-info {
        font-size:20px;
        margin:10px;
    }
    .about-title-list {
        letter-spacing: 0.1em;
        font-size:22px;
        padding:2px;
    }
    
    ul.about-list {
            list-style-type: none; /* Remove default bullets */
            padding-left: 0; /* Remove default padding */
            text-align: left;
            font-size:18px;
        }
        ul.about-list li {
            margin-top:10px;
            position: relative; /* Required for absolute positioning of the icon */
            padding-left: 30px; /* Adjust padding to make space for the icon */
            overflow: visible; /* Ensure list markers are visible */
        }
        ul.about-list li::before {
            content: "";
            background-image: url('../assets/honeycomb.png'); /* Set custom logo */
            background-size: contain; /* Adjust as necessary */
            background-repeat: no-repeat;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%); /* Center the icon vertically */
            width: 20px; /* Adjust based on your logo size */
            height: 20px; /* Adjust based on your logo size */
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
  background-color: #cba333; /* Line color */
}
.wrapper-white::before, .wrapper-white::after {
    background-color: white;
}
.line-wrapper::before {
  margin-right: 10px; /* Space between line and text */
}

.line-wrapper::after {
  margin-left: 10px; /* Space between line and text */
}


</style>