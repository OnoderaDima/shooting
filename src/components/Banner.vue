<template lang="pug">
.wrapper
    div.container.banner
        div
</template>
<script>
export default {
    name: "Banner",
   
    computed: {
        count() {
            return this.$store.getters.getScrollY;
        }
    },
}
</script>
<style lang="scss">
// стили баннера
.banner {
    min-height: 500px;
    $backgrounds: (
       // "url(../img/mesh.png)", 
        "url(../assets/banner_1.jpg) no-repeat center/cover",
        "black"
    );
    @include background ($backgrounds);
}
</style>