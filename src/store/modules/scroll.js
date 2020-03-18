export default {
    actions: {
        scroll(ctx) { 
            window.addEventListener('scroll', function() {
                let scrollY = pageYOffset;
                
                ctx.commit('updateScroll',scrollY);
            });
        },
    },
    mutations: {
        updateScroll(state,scrollY) { 
            state.scrollY = scrollY;
        },
    },
    state: {
        scrollY: 0,
        topMenuFixed: false,
    },
    getters: {
        getScrollY(state) {
            return state.scrollY;
        },
    },
}