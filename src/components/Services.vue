<template lang="pug">
.wrapper
    div.container.center.panel
        h1.caption(name="paragAbout") Наши услуги
    div.container.service.panel 
        ServiceBox(
                    v-for="serviceBox in serviceBoxes"
                    v-bind:isHit="serviceBox.isHit"
                    v-bind:title="serviceBox.title"
                    v-bind:caption="serviceBox.caption"
                    v-bind:btn="serviceBox.btn"
                    v-bind:price="serviceBox.price"
                    v-bind:urlJson="serviceBox.urlJson"
                  )
</template>
<script>
import ServiceBox from './ServiceBox.vue'

export default {
    name: "services",

    data() {
        return {
            serviceBoxes: [
                {
                    isHit: true,
                    title: "Интерактивный лучный и арбалетный тир",
                    caption: "Почувствуйте себя настоящим лучником.",
                    btn: "Хочу попробовать!",
                    price: "29 000р",
                    urlJson: "https://raw.githubusercontent.com/OnoderaDima/velosite/master/service1.json",
                },
                {
                    isHit: false,
                    title: "Интерактивный лучный и арбалетный тир",
                    caption: "Почувствуйте себя настоящим лучником.",
                    btn: "Хочу попробовать!",
                    price: "29 000р",
                    urlJson: "https://raw.githubusercontent.com/OnoderaDima/velosite/master/service2.json",                    
                },
                {
                    isHit: true,
                    title: "Интерактивный лучный и арбалетный тир",
                    caption: "Почувствуйте себя настоящим лучником.",
                    btn: "Хочу попробовать!",
                    price: "29 000р",
                    urlJson: "https://raw.githubusercontent.com/OnoderaDima/velosite/master/service3.json",                    
                },                                              
            ],
        }
    },

    beforeCreate() {
        
    },

    components: {
        ServiceBox,
    },
}
</script>
<style lang="scss">
.service {
    display: grid;
    
    grid-template: {
        columns: 1fr 1fr 1fr;
        rows: auto;
    }

    @media screen and (max-width: 960px) {
        display: block;
    }    
}
</style>