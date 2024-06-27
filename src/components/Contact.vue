<template>
    <div>
        <div class="bigardar-hero">
        <img src="../assets/bi.jpeg">  
        <div class="text-overlay">
            <h2 class="bigard-title">Kontakta Oss</h2>
            </div> 
        </div>
        <div>
            <div>
                <label for="name">Namn</label>
                <input name="name" type="text">
                <label for="email">Email</label>
                <input name="email" type="text">
                <label for="message">Meddelande</label>
                <textarea name="message" type="text"></textarea>
                <button>Skicka</button>
            </div>
            <div>
                <div>
                    <h2>Adress</h2>
                    <h3>Lupinvägen 34</h3>
                    <h3>165 70 Hässelby</h3>
                    <h3>Sverige</h3>
                </div>
                <div>
                    <h2>Kontakt</h2>
                    <h3>+46 (0)708 88 77 10</h3>
                </div>
                <div>
                    <h2>E-post</h2>
                    <h3>info@gronsten.se</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script></script>
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
.bigardar-hero {
    position:relative;
    img {
        object-fit: cover;
        height:80vh;
        width:100%;
    }
}
.bigard-title {
    letter-spacing: 0.1em;
    font-size:64px;
    color:#cba333;
    text-shadow: #0f0f0f 3px 3px 3px;
    padding:2px;
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