<script setup>

    import LocalAudio from '@/components/configuration/LocalAudio.vue'
    import StoredAudio from '@/components/configuration/StoredAudio.vue'
    import UrlList from '@/components/configuration/UrlList.vue'

    import { reversePage, goToStart } from '@/utils/navigation';



</script>

<template>

    <button @click = "reversePage()">Go back</button>
    <button @click = "goToStart()">Log out</button>

    <h1>Configuration</h1>

    <LocalAudio/>
    <StoredAudio/>
    <UrlList/>


</template>

<style scoped>

</style>
