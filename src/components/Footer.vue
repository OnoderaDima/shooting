<template lang="pug">
footer
    div.container.footer-content
        div.footer-content-links
            ul
                li
                    a О нас 
                li
                    a Видео
                li 
                    a Услуги
                li 
                    a Заказы
                li 
                    a Контакты
        div.footer-content-apps 
            a.app-btn App Store
            a.app-btn Google Play
    div.container.footer-copyright.center 
        span Тир на колёсах. Все права защищены. 2020г.
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
// подвал сайта
footer {
    padding: 15px;
    min-height: 200px;
    background-color: $COLOR_GREY;

    .footer-content {
        display: grid;

        grid-template: {
            columns: 1fr 1fr;
            rows: auto;
        }

        @media screen and (max-width: 960px) {
            display: block;
        }

        &-links {

            @media screen and (max-width: 960px) {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;

                li {
                    padding: 10px;

                    a {
                        cursor: pointer;
                        color: $COLOR_WHITE;

                        font: {
                            size: 20px;
                            family: 'Play', sans-serif;
                            weight: bold;
                        }

                        text: {
                            transform: uppercase;
                        }
                    }

                    a:hover {
                        color: $COLOR_VELVET;
                    }
                }
            }
        }

        &-apps {
            justify-self: end;
            align-self: end;

            @media screen and (max-width: 960px) {
                display: flex;
                justify-content: center;
                align-items: center;
            }            

            a.app-btn {
                display: inline-block;
                padding: 10px;
                padding-left: 48px;
                cursor: pointer;
                margin-right: 10px;

                color: #ffffff;

                font: {
                    size: 20px;
                    family: 'Play', sans-serif;
                    weight: bold;
                }
                
                border: {
                    color: #ffffff;
                    width: 1px;
                    style: solid;
                    radius: 5px;
                }

                background: {
                    repeat: no-repeat;
                    position: 5px center;
                    size: 36px;
                }              
            }

            @for $index from 1 through $APP_COUNT {
                a.app-btn:nth-child(#{$index}) {
                    background-image: url(../assets/footer_app_#{$index}.svg);
                }
            }


        }
    }

    .footer-copyright {
        color: #ffffff;
        padding: 15px;
        text-align: right!important;

        @media screen and (max-width: 960px) {
            text-align: center!important;
        }        

        font: {
            size: 14px;
            family: 'Play', sans-serif;
        }

    }
}
</style>