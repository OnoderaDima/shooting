<template lang="pug">
.wrapper
    div.container-fluid.logo-block(
        name="paragMenu"
    )
        img.logo(src="../assets/logo.png")
    div.container-fluid.top-menu(:class="{'fixed': onScroll}")
        ul
            li(
                v-for="item of menuItems"
                :class="{'selected': item.selected}"
              )
                a(:href="'#'+item.href") {{item.text}}

</template>
<script>
export default {
    name: "TopMenu",

    props: {
        logo: String,
        menuItems: Array,
    },
    
    data() {
        return {
            topMenuY: 0,
            topMenuHeight: 150,
        }
    },

    mounted() {
        this.topMenuY = this.getTopMenuY();
        this.topMenuHeight = this.getHeight()
    },

    computed: {
        getTopMenuY() {
            let topMenu = document.querySelector('.top-menu');

            return (this.getCoords(topMenu).top);
        },
        getCoords(elem) {
            let box = elem.getBoundingClientRect();

            return {
                top: Math.round(box.top + pageYOffset),
                left: Math.round(box.left + pageXOffset)
            };
        },        
        getHeight() {
            let topMenu = document.querySelector('.top-menu');

            return topMenu.style.height;
        },
        onScroll() {
            let scrollY = this.$store.getters.getScrollY;

            if (scrollY >= (this.topMenuY+this.topMenuHeight))
                return true;
            return false;
        },     
    },

    methods: {
        
    },
}
</script>
<style lang="scss">
    @import '../scss/header.scss';     // стили шапки 
</style>