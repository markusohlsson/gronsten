<template>
    <div class="footer-container">
        <div class="footer-open-wrapper">
            <h1>Öppettider</h1>
            <p>Endast bokade besök</p>
        </div>
        <div class="logo">
            <img src="../assets/logo.png" loading="lazy">  
            <p >Copyright © All Rights Reserved</p>
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
    /* @media (max-width:768px) {
    } */
.footer-container {
    @media(max-width:768px) {
        margin-top:10px;
        margin-bottom:10px;
        text-align: center;
        display:flex;
        flex-direction: column;
        gap:10px;
        .footer-open-wrapper {
            order:1;
            h1 {
                color:#DAA520;
            }
        }
        .logo {
            order:3;
            img {
                height:150px;
            }
        }
        .footer-find-wrapper {
            order:2;
            h1 {
                color: #DAA520;
            }
        }
    }
    @media(min-width:769px) {
        height:150px;
        padding:10px;
        display:flex;
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
                /* transform:scale(1.1); */
            }
        }
        .copyright {
            flex: 0 0 auto;
            width:100%;
            text-align: center;
            margin-bottom:10px;
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
}
</style>