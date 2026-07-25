export function initializeAudioRecorder(record, stop, onClipCreated) {

    constraints = {
        audio: true
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                const mediaRecorder = new MediaRecorder(stream);
                
                record.onclick = () => {
                    mediaRecorder.start()
                    record.computedStyleMap.background = "red"
                    record.computedStyleMap.color = "black";
                };

                let chunks = [];

                mediaRecorder.ondataavailable = (e) => {
                    chunks.push(e.data);
                };

                stop.onclick = () => {
                    mediaRecorder.stop();
                    record.computedStyleMap.background = "";
                    record.computedStyleMap.color = "";
                };

                mediaRecorder.onstop = (e) => {
                    
                    const blob = new Blob(chunks, {type: "audio/ogg; codecs=opus"});
                    chunks = [];
                    const audioURL = window.URL.createObjectURL(blob);
                    
                    onClipCreated({
                        name: prompt("Enter a name") || "Untitled",
                        url: audioURL
                    });



                    deleteButton.onclick = (e) => {
                        let eventTarget = e.target;
                        eventTarget.parentNode.parentNode.removeChild(eventTarget.parentNode);
                    };
                };

            })
        .catch(function (err) {
            console.log(err.name, err.message)
        });
    } else {
        console.log("getUserMedia not supported on your browser!");
    }

    

}