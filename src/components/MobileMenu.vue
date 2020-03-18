<template lang="pug">
.wrapper
    div.container-fluid.mobile-menu(:class="{'hidden':isShow()}")
        ul
            li(v-for="item in menuItems")
                span(:href="item.href") {{item.text}}
            li(@click="hideMobileMenu()") 
                span Назад
</template>
<script>
export default {
    name: "MobileMenu",

    props: {
        menuItems: Array,
    },

    methods: {
        isShow() {
            return !this.$store.getters.isMobileMenuShow;
        },
        hideMobileMenu() { 
            this.$store.dispatch("hideMobileMenu");
        },
    },
}
</script>
<style lang="scss">
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 400px;
    height: 100%;
    z-index: 20000;
    background-color: $COLOR_GREY;

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        li {
            padding: 40px 30px;
            border-bottom: 1px solid $COLOR_WHITE;
            text-align: center;
            cursor: pointer;

            span {
                color: #ffffff;

                font: {
                    size: 20px;
                    family: 'Play', sans-serif;
                    weight: bold;
                }

                text: {
                    transform: uppercase;
                    decoration: none;
                }
            }
        }

         li:hover {
             background-color: $COLOR_VELVET;
         }
    }

}

.mobile-menu.hidden {
    display: none;
}
</style>