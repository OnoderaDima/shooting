<template lang="pug">
.wrapper
    div.container.center.panel
        h1.caption(name="paragAbout") Контакты
    div.container.contacts.panel
        div.contacts-phone
            div
                a.phone-btn 
            div
                span +7 (985) 883-75-34
        div.contacts-sociallinks.center 
            a.social-btn(title="Мы в инстаграмме")
                img(src="../assets/sociallinks_instagram.png")
            a.social-btn(title="Мы во Вконтакте")
                img(src="../assets/sociallinks_vk.png")        
</template>
<script>
export default {
    name: "contacts",
}
</script>
<style lang="scss">
.contacts {
    &-phone {
        display: flex;
        justify-content: center;
        align-items: center;

        a.phone-btn {
            display: inline-block;
            width: 48px;
            height: 48px;
            box-sizing: border-box;
            padding: 2px;

            border: {
                color: $COLOR_VELVET;
                width: 6px;
                style: double;
                radius: 24px;
            }
            
            $backgrounds: (
                "url(../assets/call.png) no-repeat center",
                $COLOR_VELVET
            );
            @include background ($backgrounds);

            background-clip: padding-box;
        }

        span {
            display: inline-block;
            color: #ffffff;
            margin-left: 15px;

            font: {
                size: 36px;
                family: 'Play', sans-serif;
                weight: bold;
            }
        }
    }

    &-sociallinks {
        display: flex;
        justify-content: center;
        align-items: center;       
        padding: 15px;

        a.social-btn {
            margin: 15px;
            cursor: pointer;
        }
    }
}
</style>