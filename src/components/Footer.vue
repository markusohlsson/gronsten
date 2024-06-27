<template>
    <div class="footer-container">
        <div>
            <h1>Öppettider</h1>
            <p>Endast bokade besök</p>
        </div>
        <div class="logo">
            <img src="../assets/logo.png">  
            <p>Copyright © All Rights Reserved</p>
        </div>
        <div>
            <h1>Hitta Oss</h1>
            <p>Lupinvägen 34, 165 70 Hässelby</p>
            <p>E-post: info@gronsten.se</p>
            <p>Telefon: 0708-88 77 10</p>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.footer-container {
    bottom: 0;
    height:150px;
    padding:10px;
    display:flex;
    width:100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: #F5F5DC;
    color:#36454F;
    flex-wrap:wrap;
    .logo {
        text-align: center;
        img {
            height:120px;
            transform:scale(1.1);
        }
    }
    .copyright {
        width:100%;
        text-align: center;
    }
}
</style>