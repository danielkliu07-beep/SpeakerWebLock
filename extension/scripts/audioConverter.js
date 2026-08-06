import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile } from '@ffmpeg/util'

async function convertWebmToWav(webmBlob, inputPath, outputPath) {

    const ffmpeg = new FFmpeg();
    await ffmpeg.load();

    await ffmpeg.writeFile(inputPath, await fetchFile(webmBlob))

    await ffmpeg.exec(['-i', inputPath, '-vn', '-acodec', 'pcm_s16le', outputPath])

    const data = await ffmpeg.readFile(outputPath)

    const wavBlob = new Blob([data.buffer], { type: 'audio/wav' })

    return wavBlob;


}

const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

export { convertWebmToWav, blobToBase64 }