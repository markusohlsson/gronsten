<template>
    <div class="navigationContainer">
        <div style="overflow-y:hidden;">
            <a href="/">
                <img class="logo" src="../assets/navlogo.png" style="height:100px;padding-left:15px;" />
            </a>
        </div>
        <div class="navigation-desk">
            <ul>
                <li :class="{ active: isActive('/') }"><a href="/">Hem</a></li>
                <li :class="{ active: isActive('/produkter') }"><a href="/produkter">Produkter</a></li>
                <li :class="{ active: isActive('/bigardar') }"><a href="/bigardar">Bigårdar</a></li>
                <li :class="{ active: isActive('/om-oss') }"><a href="/om-oss">Om Oss</a></li>
                <li :class="{ active: isActive('/kontakt') }"><a href="/kontakt">Kontakt</a></li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data() {
    return {
      scrollValue: 0
    };
    },
    computed: {
        currentPath() {
            return this.$route.path;
        }
    },
    methods: {
        isActive(path) {
            return this.currentPath === path;
        }
    },
    watch: {
        '$route' (to, from) {
        console.log(`Navigated from ${from.path} to ${to.path}`);
        }
    },
    created() {
    console.log(`Current URL: ${this.$route.fullPath}`);
  }
}

</script>

<style scoped>
    .navigationContainer {
        overflow-y: hidden;
        position:fixed;
        top:0;
        z-index:111111;
        height:100px;
        font-size:18px;
        width:100%;
        display:flex;
        justify-content: space-between;
        align-items: center;
        backdrop-filter: blur(5px); /* Adds blur to the background */
        -webkit-backdrop-filter: blur(5px); /* For Safari */

    }
    .logo {
        overflow-y:hidden;
        transform: translateY(10px);
    }
    .navigation-desk {
        width:50%;
        ul {
            display:flex;
            gap:10px;
            justify-content: space-evenly;
            list-style-type: none;
            padding-left:0;
            li {
                a{
                    
                    text-decoration: none;
                    color:#36454F;
                    font-weight: 400;
                    font-size:22px;
                    text-transform: uppercase;
                }
                a:hover {
                    text-decoration: underline;
                    color:#DAA520;
                }
            }
        }
    }
</style>
