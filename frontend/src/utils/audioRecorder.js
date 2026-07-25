export function initializeAudioRecorder(audio, startBtn, stopBtn, audioPlayback) {

    const constraints = {
        audio: true
    }

    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (mediaStreamObj) {

            if ("srcObject" in audio) {
                audio.srcObject = mediaStreamObj;
            }
            else {
                audio.src = window.URL.createObjectURL(mediaStreamObj);
            }

            audio.onloadedmetadata = function (ev) {
                audio.play();
            };

            let mediaRecorder = new MediaRecorder(mediaStreamObj);

            startBtn.addEventListener('click', function (ev) {
                mediaRecorder.start()
            })

            stopBtn.addEventListener('click', function (ev) {
                mediaRecorder.stop()
            });

            mediaRecorder.ondataavailable = function (ev) {
                dataArray.push(ev.data);
            }

            let dataArray = [];

            mediaRecorder.onstop = function (ev) {
                let audioData = new Blob(dataArray, {'type': 'audio/webm'});
                
                dataArray = [];

                let audioSrc = window.URL.createObjectURL(audioData);

                audioPlayback.src = audioSrc;
            
            }

        
        })

        .catch(function (err) {
            console.log(err.name, err.message);
        });


}