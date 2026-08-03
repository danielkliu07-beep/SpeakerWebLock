<script setup>

    import { ref, onMounted } from 'vue'

     import { getRequest, postRequest, deleteRequest } from '@/utils/fetchRequest'

    const API_URL = 'http://localhost:3000/api/url'
    const storedUrlList = ref([])
    const url = ref('')

    async function loadUrl() {
        try {
            const data = await getRequest(API_URL)
            storedUrlList.value = Array.isArray(data) ? data: []
        } catch (err) {
            console.error(err)
        }
    }

    async function addUrl() {

        if (!url.value.trim()) {
            return
        }

        try {

            const query = {
                WebsiteURL: url.value
            }

            const response = await postRequest(API_URL, query)
            url.value = ''
            await loadUrl()
        } catch (err) {
            console.error(err)
        }
    }

    async function deleteUrl(id) {
        try {
            await deleteRequest(`${API_URL}/${id}`)

            await loadUrl()

        } catch (err) {
            console.error(err)
        }
    }

    async function deleteAllUrl() {
        try {

            await deleteRequest(API_URL)
            
            await loadUrl()

        } catch (err) {
            console.error(err)
        }
    }


    onMounted(loadUrl)

    

</script>


<template>

    <div id = "div1">

        <h1>URL List</h1>

        <ul v-if = "storedUrlList.length > 0">

            <li v-for="(item, index) in storedUrlList" v-bind:key = "item.website_id || index">
                <p>Website Url #{{ index + 1 }}</p>
                <a v-bind:href = "item.website_url || item.WebsiteURL" target = "_blank"> {{ item.website_url || item.WebsiteURL }}</a>
                <button @click = "deleteUrl(item.website_id)">Delete</button>
            </li>
        </ul>
        <p v-else>No URLs found</p>

        <label>Url: <input v-model = "url" placeholder="https://example.com"></label>

        <div class = "buttons">
            <button @click = "addUrl()">Create</button>
            <button @click = "deleteAllUrl()">Delete All Urls</button>
        </div>

    </div>

        



</template>


<style scoped>
    #div1 {
            border-radius: 5px;
            border: 2px solid blue;
            width: 50%;
            padding: 16px
        }

</style>