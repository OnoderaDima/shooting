export default {
    actions: {
        showMobileMenu(ctx) {
            ctx.commit('updateMobileMenu',true);
        },
        hideMobileMenu(ctx) {
            ctx.commit('updateMobileMenu',false);
        },
    },
    mutations: {
        updateMobileMenu(state,show) {
            state.show = show;
        },
    },
    state: {
        show: false,
    },
    getters: {
        isMobileMenuShow(state) {
            return state.show;
        },
    },
}