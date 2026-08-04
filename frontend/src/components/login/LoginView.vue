<script setup>

    import { ref } from 'vue'
    import { reversePage, goToStart, goToHomePage } from '@/utils/navigation';
    import { getRequest, postRequest, deleteRequest } from '@/utils/fetchRequest'

    const API_URL = 'http://localhost:3000/api/user/check'
    const username = ref('')
    const password = ref('')


    async function login() {

        console.log("Login1")

        if (!username.value.trim() || !password.value.trim()) {
            console.log("Login2")
            return
        }

        console.log("Login3")

        try {

            console.log("Login3.5")

            const query = {
                UserName: username.value,
                UserPassword: password.value,

            }

            console.log("Login3.75")
            
            const response = await postRequest(API_URL, query)
            username.value = ''
            password.value = ''

            console.log("Login4")

            if (response.check) {
                console.log("Login5")
                goToHomePage()
            } else {
                console.log("Invalid User or Password")
            }

            
        } catch (err) {
            console.error(err)
        }
    }

</script>

<template>

    <button @click = "goToStart()">Back to start</button>

    <h1>Log in</h1>

    <p>Username:</p>
    <label><input v-model = "username"></label>


    <p>Password:</p>
    <label><input v-model = "password"></label>

    <button @click = "login()">Log In</button>



</template>

<style scoped>

</style>
