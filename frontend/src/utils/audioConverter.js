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

export { convertWebmToWav }