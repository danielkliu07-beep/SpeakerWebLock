<script setup>

    import {ref} from 'vue'
    import { returnAudio as record } from '@/utils/audioRecorder';
    import { convertWebmToWav } from '@/utils/audioConverter'

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



    

</script>


<template>

    <h1>Audio Recording Test</h1>
    <p>Talk for 3 seconds</p>

    <button v-bind:disabled = "recording" @click = "recordAudio">
        {{recording ? "Recording..." : "Start recording"}}
    </button>

    <li v-for="(audio, index) in localAudioList" v-bind:key = "index">
        <button @click = "audio.play()">Play audio {{ index + 1 }}</button>
        <button @click = "deleteAudio(index)">Delete audio {{ index + 1 }}</button>
        <p>{{audio.audioUrl}}</p>
        <p>{{audio.wavUrl}}</p>
    </li>


    


</template>


<style scoped>

</style>