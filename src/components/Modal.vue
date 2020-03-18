<template lang="pug">
div.modal(v-show="isModalShow()")
    div.modal-content
        a.btn-close(
            @click.prevent="cancel()"
        )
            img(
                title="Закрыть"
                src="../assets/close.svg"
                )
        div.container-fluid.modal-content-service
            div.modal-content-service-avatar(
                                              :style="getAvatarUrl()"
                                            )
            div.modal-content-service-caption
                div.modal-content-service-caption-title {{getModalForm().name}}
                div.modal-content-service-caption-caption {{getModalForm().caption}}

        div.container-fluid.modal-content-form
            form(
                  action=""
                  method="get"
                )
                div.form-row(v-for="row in getModalForm().form")
                    div.form-item(v-for="item in row")
                        div.form-item-caption {{item.caption}}
                        div.form-item-input
                            input.inp(
                                        :type="item.type"
                                        :name="item.name"
                                      )
                div.container-fluid.center 
                    input.btn(
                               type="submit"
                               value="Отправить"
                             ) 
                    input.btn-alter(
                                 type="button"
                                 value="Отмена"
                                 @click.prevent="cancel()"
                               )                                                      

</template>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    components: {
        DatePicker,
    },     

    methods: {
        getAvatarUrl() {
            return ("background: url(" + require("../assets/" + 
                    this.$store.getters.getModalForm.avatar) + 
                    ") center bottom / contain  no-repeat, #222"
                   );
        },
        getModalForm() {
            return (this.$store.getters.getModalForm);
        },
        isModalShow() {
            return (this.$store.getters.isModalShow);
        },
        fetchForm(count) {
            this.$store.dispatch("fetchPosts",count);
        },
        // отменяет действия и сворачивает модальное окно
        cancel() {
            this.$store.dispatch("hideModal");
        },
    },
}
</script>
<style lang="scss">
$default-color: #555;
$primary-color: #1284e7;

.mx-datepicker-popup {
    z-index: 15001!important;
}
 
@import '~vue2-datepicker/scss/index.scss';

// стили модального окна
.modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 15000;
    display: flex;
    justify-content: center;
    align-items: center;

    &-content {
        position: relative;
        min-width: 400px;
        max-width: 900px;
        height: auto;
        max-height: 100%;
        background-color: $COLOR_WHITE;

        a.btn-close {
            position: absolute;
            top: 0;
            right: -52px;
            cursor: pointer;

            img {
                width: 32px;
                height: 32px;
            }
        }

        &-service {
            display: grid;
            min-height: 200px;

            grid-template: {
                columns: 240px auto;
                rows: auto;
            }

            &-avatar {
                width: 240px;
                height: 200px;

                $backgrounds: ( 
                    "url(../assets/service_1_light.png) no-repeat center bottom / contain",
                    "#222"
                );
                @include background ($backgrounds);
            }

            &-caption {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 15px;

                &-title {
                    color: $COLOR_GREY;
                    text-align: center;

                    font: {
                        size: 32px;
                        family: 'Play', sans-serif;
                        weight: bold;
                    }                    
                }

                &-caption {
                    color: $COLOR_LIGHTGREY;
                    text-align: center;

                    font: {
                        size: 20px;
                        family: 'Play', sans-serif;
                        weight: bold;
                    }
                }
            }

        }

        &-form {
            padding: 10px;

            .form-row {
                display: flex;
                justify-content: space-around;
                padding: 15px 25px;

                .form-item {
                    &-caption {
                        color: $COLOR_GREY;

                        font: {
                            size: 20px;
                            family: 'Play', sans-serif;
                        }
                    }

                    &-caption:after {
                        content: ":";
                    }

                    &-input {

                    }
                }
            }

        }
    }
}
</style>