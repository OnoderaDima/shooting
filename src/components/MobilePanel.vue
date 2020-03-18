<template lang="pug">
.wrapper
    div.container-fluid.mobile-panel
        a.hamburger(@click="showMobileMenu()")
    MobileMenu(:menuItems="menuItems") {{menuItems}}
</template>
<script>
import MobileMenu from '@/components/MobileMenu.vue' 

export default {    
    name: "MobilePanel",

    props: {
        menuItems: Array,
    },

    components: {
        MobileMenu,
    },

    methods: {
        showMobileMenu() { 
            this.$store.dispatch('showMobileMenu');
        },
        hideMobileMenu() {
            this.$store.dispatch('hideMobileMenu');
        },
    },
}
</script>
<style lang="scss">
.mobile-panel {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: rgb(0,0,0);
    z-index: 16000;

    border-bottom: 10px solid $COLOR_VELVET;

    @media screen and (min-width: 961px) {
        display: none;
    }

    a.hamburger {
        display: inline-block;
        width: 64px;
        height: 64px;
        cursor: pointer;
        box-sizing: border-box;

        background: {
            repeat: no-repeat;
            size: 32px;
            position: center;
            image: url(../assets/hamburger.svg);
        }

        border: {
            width: 4px;
            style: solid;
            color: $COLOR_VELVET;
            radius: 32px;
        }
    }
}
</style>