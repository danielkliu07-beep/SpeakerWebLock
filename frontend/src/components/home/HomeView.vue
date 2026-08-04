<script setup>

import { goToStart } from '@/utils/navigation';


</script>

<template>

    <button @click = "goToStart()">Log out</button>

    <h1>Home Page</h1>

    <nav>
        <router-link v-bind:to="{ name: 'Configuration' }">
            <button>Configuration</button>
        </router-link>

    </nav>

    <router-view/>

</template>

<style scoped>

</style>
