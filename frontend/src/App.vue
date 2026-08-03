<script setup>

    

</script>

<template>

    <p>Current route path: {{ $route.fullPath }}</p>
    <nav>
        <router-link v-bind:to="{ name: 'Configuration' }">Go to Configuration</router-link>
        <router-link v-bind:to="{ name: 'Start' }">Go to Login</router-link>
    </nav>

    <router-view/>
    



</template>

<style scoped>

</style>
