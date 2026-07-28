<script setup>

    import {onMounted, ref} from "vue"

    import { initializeAudioRecorder } from "@/utils/audioRecorder";

    import { globalAudioList } from "@/App.vue"

    const startBtn = ref(null);
    const stopBtn = ref(null);

    onMounted(() => {
        initializeAudioRecorder(
            startBtn.value,
            stopBtn.value,
            (clip) => {
                globalAudioList.value.push(clip);
            }
        );
    });
    

</script>


<template>

    <button ref = "startBtn">START RECORDING</button>
    <button ref = "stopBtn">STOP RECORDING</button>

    <section class = "sound-clips">
        <article
            v-for="(clip, index) in globalAudioList"
            v-bind:key = "index"
            class = "clip"
        >
            <audio v-bind:src="clip.url" controls></audio>

            <button onclick = "globalAudioList.value.splice(index, 1)">Delete</button>

        </article>
    </section>
        



</template>


<style scoped>

</style>