// модуль модального окна
export default {
    actions: {
        showModal(ctx) { 
            ctx.commit('updateModalData',true);
        },
        // скрывает модальное окно
        hideModal(ctx) {
            ctx.commit('updateModalData',false);
        },
        // получает данные о модальном окне
        async getModalData(ctx) {

            ctx.commit('updateModalData',true);
        },

        async fetchModalForm({commit},urlJson) { 
            const res = await fetch(urlJson);
            const form = await res.json();
      
            commit('updateModalForm', {form});
        },        

    },
    mutations: {
        updateModalForm(state,payload) {
            state.form = payload.form;
        },
        updateModalData(state,show) {
            state.show = show;
        },
    },
    state: {
        show: false,
        form: [],
    },
    getters: {
        isModalShow(state) {
            return state.show;
        },
        getModalForm(state) {
            return state.form;
        },
    },
}