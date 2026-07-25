<script setup>

    import {onMounted, ref} from "vue"

    const audio = ref(null);
    const startBtn = ref(null);
    const stopBtn = ref(null);
    const audioPlayback = ref(null);

    onMounted(() => {
        initializeAudioRecorder(
            audio.value,
            startBtn.value,
            stopBtn.value,
            audioPlayback.value
        );
    });
    

</script>


<template>
    
    <recorder>

        <audio ref = "audio"></audio>

        <button ref = "startBtn"></button>
        <button ref = "stopBtn"></button>

        <audio ref = "audioPlayback"></audio>


    </recorder>


</template>


<style scoped>

</style>