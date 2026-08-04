<script setup>

    import LocalAudio from '@/components/configuration/LocalAudio.vue'
    import StoredAudio from '@/components/configuration/StoredAudio.vue'
    import UrlList from '@/components/configuration/UrlList.vue'

    import { router } from '@/router/router'


    function reverse() {
        router.go(-1)
    }

</script>

<template>

    <button @click = "reverse()">Go back</button>

    <h1>Configuration</h1>

    <LocalAudio/>
    <StoredAudio/>
    <UrlList/>


</template>

<style scoped>

</style>
