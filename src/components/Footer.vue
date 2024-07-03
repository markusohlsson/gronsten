<template>
    <div class="footer-container">
        <div class="footer-open-wrapper">
            <h1>Öppettider</h1>
            <p>Endast bokade besök</p>
        </div>
        <div class="logo">
            <img src="../assets/logo.png">  
            <p>Copyright © All Rights Reserved</p>
        </div>
        <div class="footer-find-wrapper">
            <h1>Hitta Oss</h1>
            <p>Lupinvägen 34, 165 70 Hässelby</p>
            <p><span class="bold">E-post: </span>info@gronsten.se</p>
            <p><span class="bold">Telefon: </span> 0708-88 77 10</p>
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
    background-color: #ffffff;
    color:#36454F;
    flex-wrap:wrap;
    box-shadow: 0 -1px 5px rgba(54, 69, 79, 0.5); /* horizontal offset, vertical offset, blur radius, color */
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
    .footer-open-wrapper {
        height:100%;
        display:flex;
        flex-direction: column;
        justify-content:flex-start;
        gap:5px;
        h1 {
            margin-top:10px;
        }
    }
    .footer-find-wrapper {
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content: flex-start;
        gap:5px;
        h1 {
            margin-top:10px;
        }
    }
    .bold {
        font-weight:800;
    }
}
</style>