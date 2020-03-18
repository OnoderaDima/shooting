import Vue from 'vue'
import Vuex from 'vuex'
import scroll from './modules/scroll.js'
import mobile from './modules/mobile.js'
import modal from './modules/modal.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        scroll,
        mobile,
        modal,
    }
})