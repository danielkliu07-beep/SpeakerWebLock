<script setup>

    import {ref} from 'vue'

    import { returnAudio as record } from '@/utils/audioRecorder';

    const recording = ref(false);

    const localAudioList = ref([])

    const recordAudio = async () => {

        // audio = {
        // audioBlob,
        // audioUrl,
        // play
        // };

        recording.value = true;
        try {
            const audio = await record();
            localAudioList.value.push(audio)
        } finally {
            recording.value = false;
        }
    }

    const deleteAudio = (index) => {

        URL.revokeObjectURL(localAudioList.value[index].audioURL);

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
    </li>


    


</template>


<style scoped>

</style>