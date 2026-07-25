<script setup>

    import {onMounted, ref} from "vue"

    const startBtn = ref(null);
    const stopBtn = ref(null);
    const soundClips = ref([]);

    onMounted(() => {
        initializeAudioRecorder(
            startBtn.value,
            stopBtn.value,
            (clip) => {
                soundClips.value.push(clip);
            }
        );
    });
    

</script>


<template>
    
    <recorder>

        <button ref = "startBtn">START RECORDING</button>
        <button ref = "stopBtn">STOP RECORDING</button>

        <section class = "sound-clips">
            <article
                v-for="(clip, index) in soundClips"
                v-bind:key = "index"
                class = "clip"
            >
                <audio v-bind:src="clip.url" controls></audio>

                <p>{{ clip.name }}</p>

                <button @click = "soundClips.splice(index, 1)">Delete</button>

            </article>
        </section>
        

    </recorder>


</template>


<style scoped>

</style>