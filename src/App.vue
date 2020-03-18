<template lang="pug">
  div(id="app")
    header    
      TopMenu(
              v-bind:menuItems="topMenu.menuItems"
              v-bind:logo="topMenu.logo"
             )

      MobilePanel(
                  v-bind:menuItems="topMenu.menuItems"
                 )
    main
      Banner   
      AboutUs
      Services
      OrderHow(v-bind:orders="orders")
      Contacts
    Footer 
    Modal
</template>
<script>
import {mapGetters} from 'vuex'
import TopMenu from './components/TopMenu.vue'
import MobilePanel from './components/MobilePanel.vue'
import Banner from './components/Banner.vue'
import AboutUs from './components/AboutUs.vue'
import Services from './components/Services.vue'
import OrderHow from './components/OrderHow.vue'
import Contacts from './components/Contacts.vue'
import Footer from './components/Footer.vue'
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  computed: mapGetters(["getScrollY","isMobileMenuShow","isModalShow","getModalForm"]),
  methods: {
    showMobileMenu() {
      this.$store.dispatch("showMobileMenu");
    },
  },
  async mounted() {
    this.$store.dispatch('scroll');
  },
  data() {
    return {
      topMenu: {
        menuItems: [
          {
            href: "paragMain",
            text: "Главная",
            selected: true,
          },
          {
            href: "paragAbout",
            text: "О нас",
            selected: false,
          },
          {
            href: "paragServices",
            text: "Наши услуги",
            selected: false,
          },
          {
            href: "paragOrder",
            text: "Заказать",
            selected: false,
          },
          {
            href: "paragContacts",
            text: "Контакты",
            selected: false,
          },                                        
        ],
        logo: "hello",
      },

      orders: [
        {
          selected: true,
          cases: [
            {
              caption: `Выберите услугу на сайте. Нажмите "Хочу попробовать!"`,
            },
            {
              caption: `Оформите форму заказа`,
            },
            {
              caption: `Ожидайте, пока мы с вами свяжемся!`,
            },                        
          ],
        },
        {
          selected: false,
          cases: [
            {
              caption: `Позвоните по нашему номеру`,
            },
            {
              caption: `Дождитесь оператора`,
            },
            {
              caption: `Закажите выезд тира, сообщив время и место!`,
            },                        
          ],
        },
        {
          selected: false,
          cases: [
            {
              caption: `Выберите услугу на сайте. Нажмите "Хочу попробовать!"`,
            },
            {
              caption: `Оформите форму заказа`,
            },
            {
              caption: `Ожидайте, пока мы с вами свяжемся!`,
            },                        
          ],
        },                
      ],
    }
  },  
  components: {
    TopMenu,
    MobilePanel,
    Banner,
    AboutUs,
    Services,
    OrderHow,
    Contacts,
    Footer,
    Modal,
  },
}
</script>

<style lang="scss">
 
</style>