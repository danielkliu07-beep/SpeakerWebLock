<script setup>

    import { ref } from 'vue'
    import { reversePage, goToStart, goToHomePage } from '@/utils/navigation';
    import { getRequest, postRequest, deleteRequest } from '@/utils/fetchRequest'

    const API_URL = 'http://localhost:3000/api/user/check'
    const username = ref('')
    const password = ref('')


    async function login() {

        if (!username.value.trim() || !password.value.trim()) {
            return
        }

        try {

            const query = {
                UserName: username.value,
                UserPassword: password.value,

            }

            const response = await postRequest(API_URL, query)
            username.value = ''
            password.value = ''

            if (response.ok) {
                goToHomePage()
            }

            
        } catch (err) {
            console.error(err)
        }
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
