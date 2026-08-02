const recordAudio = () =>
  new Promise(async (resolve, reject) => {

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks = [];

      mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
      });

      const start = () => mediaRecorder.start();

      const stop = () =>
        new Promise(resolve => {
          mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            const play = () => audio.play();
            stream.getTracks().forEach((track) => track.stop());
            resolve({ audioBlob, audioUrl, play });
          });

          mediaRecorder.stop();
        });

      resolve({ start, stop });
    } catch (err) {
      reject(err);
    }
  });

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const handleAction = async () => {

  const recorder = await recordAudio();

  recorder.start();

  await sleep(3000);

  return await recorder.stop();

};

export { recordAudio, handleAction }