<template>
    <div class="navigationContainer">
        <div style="overflow-y:hidden;">
            <!-- <a href="/" style="text-decoration:none">
                <img class="logo" src="../assets/navlogo.png" style="height:100px;padding-left:15px;" loading="lazy" />
            </a> -->
        </div>
        <div class="navigation-desk">
            <ul>
            <li :class="{ active: isActive('/') }">
            <router-link :to="'/'" tag="a" exact-active-class="active">Hem</router-link>
            </li>
            <li :class="{ active: isActive('/produkter') }">
            <router-link :to="'/produkter'" tag="a" exact-active-class="active">Produkter</router-link>
            </li>
            <li :class="{ active: isActive('/bigardar') }">
            <router-link :to="'/bigardar'" tag="a" exact-active-class="active">Bigårdar</router-link>
            </li>
            <li :class="{ active: isActive('/om-oss') }">
            <router-link :to="'/om-oss'" tag="a" exact-active-class="active">Om Oss</router-link>
            </li>
            <li :class="{ active: isActive('/kontakt') }">
            <router-link :to="'/kontakt'" tag="a" exact-active-class="active">Kontakt</router-link>
            </li>
        </ul>
        </div>
            <div class="navigation-mobile" :class="{ open: menuOpen }">
                <ul>
                    <li :class="{ active: isActive('/') }" @click="toggleMenu">
                    <router-link :to="'/'" tag="a" exact-active-class="active">Hem</router-link>
                    </li>
                    <li :class="{ active: isActive('/produkter') }" @click="toggleMenu">
                    <router-link :to="'/produkter'" tag="a" exact-active-class="active">Produkter</router-link>
                    </li>
                    <li :class="{ active: isActive('/bigardar') }" @click="toggleMenu">
                    <router-link :to="'/bigardar'" tag="a" exact-active-class="active">Bigårdar</router-link>
                    </li>
                    <li :class="{ active: isActive('/om-oss') }" @click="toggleMenu">
                    <router-link :to="'/om-oss'" tag="a" exact-active-class="active">Om Oss</router-link>
                    </li>
                    <li :class="{ active: isActive('/kontakt') }" @click="toggleMenu">
                    <router-link :to="'/kontakt'" tag="a" exact-active-class="active">Kontakt</router-link>
                    </li>
                </ul>
            </div>
    <div class="hamburger" @click="toggleMenu" style="z-index: 1111">
        <span v-if="!menuOpen" class="material-symbols-outlined">menu</span>
        <span v-if="menuOpen" class="material-symbols-outlined">close</span>
    </div>
    </div>

</template>

<script>

export default {
    data() {
    return {
      scrollValue: 0,
      menuOpen:false,
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
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen; // Toggle menuOpen state
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
    @media (max-width: 768px) {
        .navigation-mobile.open {

            top:0;
        }
        .navigationContainer {
        }
        .navigation-desk{
            display: none; /* Hide desktop navigation on mobile */
        }
        .hamburger {
            position:fixed;
            right:10px;
            top:10px;
            z-index:1234567;
            span {
                color:#DAA520;
                font-size:45px;
            }
        }
        .navigation-mobile {
            display: block; /* Show mobile navigation */
            position: fixed;
            background-color: white;
            top:-100%; 
            width:100vw;
            height:40%;
            z-index:1111;
            transition: top 0.5s ease;
            ul {
                list-style-type:none;
                display:flex;
                flex-direction:column;
                height:100%;
                justify-content: space-evenly;
                text-align: center;
                li {
                }
                a {
                    text-decoration:none;
                    color:#36454F;
                    font-size:25px;
                }
            }
        }

    }
    @media (min-width:769px) {
        .navigationContainer {
        overflow-y: hidden;
        position:absolute;
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
        .navigation-mobile {
            display:none;
        }
        .hamburger {
            display:none;
        }
    }
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
