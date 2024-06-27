<template>
    <div style="display: flex;justify-content: space-between;position:relative;margin-bottom:100px;">
        <div style="display:flex;align-items:center;justify-content:center;">
            <h1 style="font-size: 240px;color:#DAA520">Bigårdar</h1>
            <div style="position:absolute;width:30%;left:15px;bottom:15px;">
                <p style="color:#36454F">Här hittar du information om våra bigårdar, deras placering och de unika förhållanden som gör varje bigård speciell. Utforska hur vi arbetar med biodling och hur våra bin bidrar till en hållbar och blomstrande natur.</p>
            </div>
        </div>
        <div>
            <img style="height:70vh; width:30vw; object-fit: cover;margin-top:100px;margin-right:15px;" src="../assets/bigardar.jpg">
        </div>
    </div>
    <div class="bigard-wrapper">
        <div class="image-wrapper align-left">
            <img src="../assets/lupinen.jpg">
        </div>
        <div>
            <h1 style="font-size:120px; color:#DAA520">Lupinvägen</h1>
            <p>Hemmabigården på Lupinvägen i Hässelby Villastad</p>
        </div>
    </div>
    <div class="bigard-wrapper">
        <div>
            <h1 style="font-size:120px; color:#DAA520">Fjärilshuset</h1>
            <p>Fjärilshuset i Hagaparken</p>
        </div>
        <div class="image-wrapper align-right">
            <img src="../assets/fjarilshuset.jpg">
        </div>
    </div>
    <div class="bigard-wrapper">
        <div  class="image-wrapper align-left" >
            <img  src="../assets/langholmen.jpg">
        </div>
        <div>
            <h1 style="font-size:120px; color:#DAA520">Långholmen</h1>
            <p>Långsholmens Koloniträdgårdar i en oas mitt i Stockholm City</p>
        </div>
    </div>

</template>

<script>

</script>

<style scoped>
.image-wrapper {
    img {
        height:600px;
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

/* Alternate alignment for image wrappers */
.bigard-wrapper:nth-child(even) .image-wrapper {
    justify-content: flex-end; /* Align image to the right on even indexed elements */
}

.bigard-wrapper:nth-child(odd) .image-wrapper {
    justify-content: flex-start; /* Align image to the left on odd indexed elements */
}
</style>