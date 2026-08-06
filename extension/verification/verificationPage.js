import { getRequest, postRequest, deleteRequest } from "../scripts/fetchRequest";
import { returnAudio as record } from "../scripts/audioRecorder";
import { convertWebmToWav, blobToBase64 } from "../scripts/audioConverter";

let audio = null;
const API_URL = 'http://localhost:3000/api/audio/verify'


document.getElementById("recordBtn").addEventListener("click", recordAudio);

document.getElementById("verifyBtn").addEventListener("click", verifyAudio);

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

    try {
        audio = await convertAudio(await record())

        document.getElementById("verifyBtn").disabled = false

    } catch (err) {
        console.error(err)
    }
}


async function verifyAudio() {

    if (!audio) {
        return;
    }

    try {

        const base64AudioUrl = await blobToBase64(audio.wavBlob)

        const query = {
            TestUrl: base64AudioUrl
        }

        const response = await postRequest(API_URL, query)

        chrome.runtime.sendMessage({
            type: "verificationResult",
            verified: response.verification
        });


    } catch (err) {
        console.error(err)
    }
}
