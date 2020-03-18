<template lang="pug">
.wrapper
    div.container.center.panel
        h1.caption(name="paragAbout") О нас 
    div.container.center.about-text.panel Выездные тиры – самые неплохой способ удивить своих коллег по работе и не только. |#[br] Мы приезжаем, привозим с собой всё оборудование, а вы просто развлекаетесь.
    div.container.center.video.panel 
        div.video-foreground
            video(
                id="video_background"
                preload="auto"
                autoplay="true"
                loop="true"
                muted="muted"
            )
                source(src="../assets/vd.mp4")
            div.video-foreground-overcover
                a.play.btn Play
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
// текст "о нас"
.about-text {
    color: #ffffff;
    padding-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;

    font: {
        size: 20px;
        family: 'Play', sans-serif;
        weight: bold;
    }
}

// видео
.video {
    position: relative;

    &-foreground {
        width: 100%;
        height: auto;
        position: inherit;

        video {
            width: 100%;
        }

        &-overcover {
            position: absolute;

            left: 0;
            top: 0;
            width: 100%;
            height: 100%;

            display: none;
            justify-content: center;
            align-items: center;

            a.play-btn {
                display: inline-block;
                width: 100px;
                height: 100px;
                padding: 50px;
                border-radius: 200px;
                border: double 15px rgba(255,255,255,0.7);
                background: #ffffffb3;
                background-clip: padding-box;       
            }
        }
    }
}
</style>