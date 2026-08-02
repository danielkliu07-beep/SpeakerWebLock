<script setup>

    import {ref} from 'vue'

    import { handleAction as record } from '@/utils/audioRecorder';

    const recording = ref(false);

    const localAudioList = ref([])

    const handleAction = async () => {

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


    

</script>


<template>

    <h1>Audio Recording Test</h1>
    <p>Talk for 3 seconds</p>

    <button v-bind:disabled = "recording" @click = "handleAction">
        {{recording ? "Recording..." : "Start recording"}}
    </button>

    <li v-for="(audio, index) in localAudioList" v-bind:key = "index">
        <button @click = "audio.play()">Play audio {{ index + 1 }}</button>
    </li>

    


</template>


<style scoped>

</style>