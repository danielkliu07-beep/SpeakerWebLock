<script setup>

    import { ref, onMounted } from 'vue'

    import { getRequest, postRequest, deleteRequest } from '@/utils/fetchRequest'

    const API_URL = 'http://localhost:3000/api/audio'

    const storedAudioList = ref([])

    async function loadAudio() {
        try {
            const data = await getRequest(API_URL)
            storedAudioList.value = Array.isArray(data) ? data: []
        } catch (err) {
            console.error(err)
        }
    }

    async function deleteAllAudio() {
        try {  
            await deleteRequest(API_URL)

            await loadAudio()


        } catch (err) {
            console.error(err)
        }
    }

    async function deleteAudio(index) {
        try {
            await deleteRequest(`${API_URL}/${index}`)

            await loadAudio()

        } catch (err) {
            console.error(err)
        }
    }

    onMounted(loadAudio)

    
    

</script>


<template>

    <div id = "div1">
        
        <h1>Stored Audio</h1>

        <ul v-if = "storedAudioList.length > 0">

            <button @click = "deleteAllAudio()">DELETE ALL AUDIO</button>

            <li v-for="(audio, index) in storedAudioList" v-bind:key = "audio.audio_id || index">
                <p>Audio #{{ index + 1 }}</p>
                <audio v-bind:src = "audio.audio_url || audio.AudioURL" controls></audio>
                <button @click = "deleteAudio(audio.audio_id)">DELETE THIS AUDIO</button>
            </li>
        </ul>
        <p v-else>No audio recordings found</p>

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