<script setup>

    import {ref} from 'vue'
    import { returnAudio as record } from '@/utils/audioRecorder';
    import { convertWebmToWav, blobToBase64 } from '@/utils/audioConverter'
    import { getRequest, postRequest, deleteRequest } from '@/utils/fetchRequest'

    const recording = ref(false);

    const localAudioList = ref([])

    const convertAudio = async (audio) => {
    
        try {
            const wavBlob = await convertWebmToWav(
                audio.audioBlob,
                "input.webm",
                "output.wav" 
            )

            // audio = { audioBlob, audioUrl, play, wavBlob, wavUrl };

            audio.wavBlob = wavBlob;
            audio.wavUrl = URL.createObjectURL(wavBlob)

            return audio;
            
        } catch (err) {
            console.error(err)
        }

    }

    const recordAudio = async () => {

        // audio = { audioBlob, audioUrl, play };

        recording.value = true;
        try {
            const audio = await convertAudio(await record())

            localAudioList.value.push(audio)
        } finally {
            recording.value = false;
        }
    }

    const deleteAudio = (index) => {

        URL.revokeObjectURL(localAudioList.value[index].audioUrl);
        URL.revokeObjectURL(localAudioList.value[index].wavUrl);

        localAudioList.value.splice(index, 1)

    }

    const sendAudio = async () => {

        const API_URL = 'http://localhost:3000/api/audio'

        for (let i = 0; i < localAudioList.value.length; i++) {
            
            const base64AudioUrl = await blobToBase64(localAudioList.value[i].wavBlob);
            
            const query = {
                AudioURL: base64AudioUrl,
            }

            const response = await postRequest(API_URL, query)
        }
    }



    

</script>


<template>

    <div id = "div1">

        <h1>Local Audio</h1>
        <p>Talk for 3 seconds</p>

        <button v-bind:disabled = "recording" @click = "recordAudio">
            {{recording ? "Recording..." : "Start recording"}}
        </button>
        <button @click = "sendAudio()">Send all audios</button>

        <li v-for="(audio, index) in localAudioList" v-bind:key = "index">
            <button @click = "audio.play()">Play audio {{ index + 1 }}</button>
            <button @click = "deleteAudio(index)">Delete audio {{ index + 1 }}</button>
        </li>


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