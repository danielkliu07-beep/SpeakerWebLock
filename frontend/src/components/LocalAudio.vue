<script setup>

    import {ref} from 'vue'
    import { returnAudio as record } from '@/utils/audioRecorder';
    import { convertWebmToWav } from '@/utils/audioConverter'

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

    const convertAudio = async (audio) => {
        
        const wavBlob = await convertWebmToWav(
            audio.audioBlob,
            "input.webm",
            "output.wav" 
        )

        return wavBlob;

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
        <p>{{audio.audioUrl}}</p>
        <p>{{ URL.convertObjectURL(convertAudio(audio)) }}</p>
    </li>


    


</template>


<style scoped>

</style>