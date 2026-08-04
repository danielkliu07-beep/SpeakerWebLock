<script setup>

    import { ref } from 'vue'
    import { goToStart } from '@/utils/navigation'
    import { getRequest, postRequest, deleteRequest } from '@/utils/fetchRequest'

    const API_URL = 'http://localhost:3000/api/user'
    const username = ref('')
    const password = ref('')
    const email = ref('')

    async function register() {

        if (!username.value.trim() || !password.value.trim() || !email.value.trim()) {
            return
        }

        try {

            const query = {
                UserName: username.value,
                UserPassword: password.value,
                UserEmail: email.value,

            }

            const response = await postRequest(API_URL, query)
            username.value = ''
            password.value = ''
            email.value = ''

            if (response.ok) {
                goToStart()
            }

            
        } catch (err) {
            console.error(err)
        }
    }

</script>

<template>
    
    <h1>Register</h1>

    <p>Username:</p>
    <label><input v-model = "username"></label>


    <p>Password:</p>
    <label><input v-model = "password"></label>

    <p>Email:</p>
     <label><input v-model = "email"></label>

    <button @click = "register()">Register</button>



</template>

<style scoped>

</style>
