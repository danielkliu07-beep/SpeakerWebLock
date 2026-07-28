export function initializeAudioRecorder(record, stop, onClipCreated) {

    const constraints = {
        audio: true
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                const mediaRecorder = new MediaRecorder(stream);
                
                record.onclick = () => {
                    if (mediaRecorder.state === "inactive") {
                        mediaRecorder.start()
                        record.style.background = "red"
                        record.style.color = "black";
                    }
                };

                let chunks = [];

                mediaRecorder.ondataavailable = (e) => {
                    chunks.push(e.data);
                };

                stop.onclick = () => {
                    if (mediaRecorder.state === "recording") {
                        mediaRecorder.stop();
                        record.style.background = "";
                        record.style.color = "";
                    }
                };

                mediaRecorder.onstop = (e) => {
                    
                    const blob = new Blob(chunks, {type: "audio/ogg; codecs=opus"});
                    chunks = [];
                    const audioURL = window.URL.createObjectURL(blob);
                    
                    onClipCreated({
                        url: audioURL
                    });


                };

            })
        .catch(function (err) {
            console.log(err.name, err.message)
        });
    } else {
        console.log("getUserMedia not supported on your browser!");
    }

    

}