<template lang="pug">
.wrapper
    div.container.center.panel
        h1.caption(name="paragAbout") Как заказать?
    div.container.orders.panel 
        div.order-switcher
            a.order-switcher-item(
                              v-for="(order, number) in orders"
                              :class="{'selected':order.selected}"
                              @click="switchOrder(number)"
                             ) Способ {{number+1}}
        div.order-case(
                    v-for="order in orders"
                    :class="{'selected':order.selected}"
                  )
            div.order-case-item(v-for="(caseItem, number) in order.cases")
                h1 Шаг {{number+1}}-й
                span {{caseItem.caption}}
</template>
<script>
export default {
    name: "OrderHow",

    props: {
        orders: Array,
    },

    methods: {
        switchOrder(number) {
            this.orders.forEach(function(order, item) {
                if (order.selected)
                    order.selected=false;
                if (number==item)
                    order.selected=true;
            });
        },
    },
}
</script>
<style lang="scss">
.orders {
    .order-switcher {
        width: 100%;
        text-align: center;

        &-item {
            position: relative;
            display: inline-block;
            width: 128px;
            height: 128px;
            background-clip: padding-box;
            color: $COLOR_WHITE;
            box-sizing: border-box;    
            line-height: 128px;

            margin: {
                left: 25px;
                right: 25px;
            }
            
            font: {
                size: 20px;
                family: 'Play', sans-serif;
                weight: bold;
            }

            text: {
                transform: uppercase;
                align: center;
            }
        }

        &-item.selected {
            color: $COLOR_VELVET!important;
        }

        &-item:not(.selected):before {
            display: none;

            border: {
                radius: 64px;
                left: 2px solid transparent;
                right: 2px solid transparent;
                top: 2px solid $COLOR_WHITE;
                bottom: 2px solid $COLOR_WHITE;
            }              
        }

        &-item.selected:before {
            display: inline-block;

            border: {
                radius: 64px;
                left: 2px solid transparent;
                right: 2px solid transparent;
                top: 2px solid $COLOR_VELVET;
                bottom: 2px solid $COLOR_VELVET;
            }              
        }

        &-item:before {
            display: none;
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 128px;
            height: 128px;
            box-sizing: border-box;        
            animation: rotating-left 2s infinite linear;
        }

        &-item:not(.selected):after {
            display: none;

            border: {
                radius: 55px;
                left: 2px solid transparent;
                right: 2px solid transparent;
                top: 2px solid $COLOR_WHITE;
                bottom: 2px solid $COLOR_WHITE;
            }               
        }

        &-item.selected:after {
            display: inline-block;

            border: {
                radius: 55px;
                left: 2px solid transparent;
                right: 2px solid transparent;
                top: 2px solid $COLOR_VELVET;
                bottom: 2px solid $COLOR_VELVET;
            }             
        }        

        &-item:after {
            display: none;
            content: "";
            position: absolute;
            left: 9px;
            top: 9px;
            width: 110px;
            height: 110px;
            box-sizing: border-box;         
            animation: rotating-right 3s infinite linear;
        }       
        
        &-item:hover:before {
            display: inline-block;
            cursor: pointer;            
        }        

        &-item:hover:after {
            display: inline-block;
            cursor: pointer;            
        }

        @keyframes rotating-right {
            to { transform: rotate(360deg); }
        }          

        @keyframes rotating-left {
            to { transform: rotate(-360deg); }
        }        

    }

    .order-case {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;

        @media screen and (max-width: 960px) {
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }        

        padding: 15px 0;

        &-item {
            width: 300px;
            height: 200px;
            padding: 15px;
            text-align: center;
            box-sizing: border-box;

            border: {
                color: #ffffff;
                width: 2px;
                style: solid;
                radius: 10px;
            }

            color: #ffffff;

            font: {
                size: 20px;
                family: 'Play', sans-serif;
            }

            @media screen and (max-width: 960px) {
                width: 350px;
                margin-bottom: 15px;
            } 

        }



    }

    .order-case:not(.selected) {
        display: none!important;
    }
}
</style>