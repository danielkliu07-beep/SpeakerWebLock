<script setup>

    import { ref } from 'vue'
    import { router } from '@/router/router'

    const username = ref('')
    const password = ref('')

    async function login() {
        router.push({name: 'HomePage'})
    }

</script>

<template>

    <h1>Log in</h1>

    <p>Username:</p>
    <label><input v-model = "username"></label>


    <p>Password:</p>
    <label><input v-model = "password"></label>

    <button @click = "login()">Log In</button>



</template>

<style scoped>

</style>
