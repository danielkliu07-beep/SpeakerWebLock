<script setup>

    

</script>

<template>

    <h1>Speaker Recognition Web-Lock</h1>

    <nav>
        <router-link v-bind:to="{ name: 'Login' }">
            <button>Login</button>
        </router-link>

        <router-link v-bind:to="{ name: 'Register' }">
            <button>Register</button>
        </router-link>
    </nav>

    <router-view/>
    



</template>

<style scoped>

</style>
