<template lang="pug">
    div.service-box 
        div.service-box-header
            div.service-box-header-hit(v-if="isHit") Хит!
        div.service-box-footer
            div.service-box-footer-title {{title}}
        div.service-box-footer-caption {{caption}} #[br] 
            a.btn(@click.prevent="openModal(urlJson)") {{btn}}
        div.service-box-footer-price От {{price}}
</template>
<script>
export default {
    name: "serviceBox",

    props: {
        isHit: Boolean,
        title: String,
        caption: String,
        btn: String,
        price: String,
        urlJson: String,
    },

    methods: {
        openModal(urlJson) {
            this.$store.dispatch("fetchModalForm",urlJson).then(
                ()=>this.$store.dispatch("showModal")
            );      
        }
    },
}
</script>
<style lang="scss">
.service {

    &-box {
        display: grid;

        justify-self: center;
        
        grid-template: {
            columns: auto;
            rows: 1fr 1fr;
        }
        
        width: 300px;
        height: 480px;

        box-sizing: border-box;



        border: {
            width: 2px;
            style: solid;
            color: #ffffff;
            radius: 10px 45px 10px 10px;
        }

        background: {
            repeat: no-repeat;
            position: center;
            size: cover;
            color: #333;
        }

        transition: filter .5s;
        -webkit-transition: filter .5s;
        -moz-transition: filter .5s;
        -o-transition: filter .5s;

        cursor: pointer;

        @media screen and (max-width: 960px) {
            width:100%;
            margin:15px;
            
            border: {
                radius: 10px;
            }

            background: {
                size: contain;
            }
        }    
    }

    @for $index from 1 through $SERVICE_COUNT {
        &-box:nth-child(#{$index}) {
            background-image: url(../assets/service_#{$index}_light.png);
            filter: grayscale(100%);
        }

        &-box:nth-child(#{$index}):hover {
            filter: grayscale(0%);
            border: 2px solid #7000cc;
        }     
        
        &-box:nth-child(#{$index}):hover .service-box-footer-caption {
            display: block;
            animation: service-box-caption-show; 
            animation-duration: .5s;
            animation-fill-mode: both;
        } 

        &-box:nth-child(#{$index}):not(:hover) .service-box-footer-caption {
            display: block;
            animation: service-box-caption-hide; 
            animation-duration: .5s;
            animation-fill-mode: both;
        }      
        
        &-box:nth-child(#{$index}):hover .service-box-header-hit {
            color: #7000cc;
        }

        @keyframes service-box-caption-show { 
            from { 
                opacity: 0;
                height: 0;
            } 
            to { 
                opacity: 1;
                height: 200px; 
            } 
        }

        @keyframes service-box-caption-hide { 
            from { 
                opacity: 1;
                height: 200px;
            } 
            to { 
                opacity: 0;
                height: 0; 
            } 
        }        

    } 

    &-box {
        &-header {
            position: relative;

            &-hit {
                position: absolute;
                top: -47px;
                left: 10px; 

                color: #ffffff;

                font: {
                    size: 48px;
                    family: 'Play', sans-serif;
                    weight: bold;
                }

                text: {
                    transform: uppercase;
                }

                @media screen and (max-width: 960px) {
                    top: 5px;
            
                    color: $COLOR_VELVET;
                }                   
            }
        }

        &-footer {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;


            &-title {
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                color: #ffffff;

                text: {
                    align: center;
                    transform: uppercase;
                }

                font: {
                    size: 24px;
                    family: 'Play', sans-serif;
                    weight: bold;
                }                
            }

            &-caption {
                display: none;
                opacity: 0;
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                color: #eeeeee;
                overflow: hidden;

                text: {
                    align: center;
                    transform: uppercase;
                }

                font: {
                    size: 20px;
                    family: 'Play', sans-serif;
                    style: italic;
                }     
                
                transition: all 0.5s;
                -webkit-transition: all 0.5s;
                -moz-transition: all 0.5s;
                -o-transition: all 0.5s;
            }            

            &-price {
                width: 100%;
                padding: 10px;
                box-sizing: border-box;
                background-color: #7000cc;
                color: #ffffff;

                border-radius: 0 0 10px 10px;

                text: {
                    align: center;
                    transform: uppercase;
                }

                font: {
                    size: 20px;
                    family: 'Play', sans-serif;
                    weight: bold;
                }
            }
        }
    }
}
</style>