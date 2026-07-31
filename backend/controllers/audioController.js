import { pool } from "../db"
import { sendAudio } from "../utils/fetchaudio"


const getAudios = async (req, res) => {
    try {

        const query = {
            text: 'SELECT * FROM audio'
        }

        const audios = await pool.query(query)

        if (audios.rows.length === 0) {
            return res.status(404).json({error: "Audio not found"});
        }

        res.status(200).json(audios.rows);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to get audios",
            error_message: err.message,
        })
    }
}



const getAudio = async (req, res) => {
    try {

        const query = {
            text: 'SELECT * FROM audio WHERE audio_id = $1',
            values: [req.params.id],
        }

        const audios = await pool.query(query)

        if (audios.rows.length === 0) {
            return res.status(404).json({error: "Audio not found"});
        }

        res.status(200).json(audios.rows[0])

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to get audio",
            error_message: err.message,
        })

    }

}

const addAudios = async (req, res) => {
    try {

        const query = {
            text: 'INSERT INTO audio (AudioURL) VALUES ($1) RETURNING *',
            values: [req.body.AudioURL],
        }

        const audios = await pool.query(query)

        res.status(200).json(audios.rows[0])

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to add audios",
            error_message: err.message,
        })

    }
    
}


const deleteAudios = async (req, res) => {
    try {

        const query = {
            text: 'DELETE FROM audio',
        }

        const audios = await pool.query(query)

        res.status(200).json(audios.rows)

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to delete audios",
            error_message: err.message,
        })

    }
}

const deleteAudio = async (req, res) => {
    try {

        const query = {
            text: 'DELETE FROM audio WHERE audio_id = $1',
            values: [req.params.id]
        }

        const audios = await pool.query(query)

        res.status(200).json(audios.rows[0])

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to delete audio",
            error_message: err.message,
        })

    }

}

const verifyAudio = async (req, res) => {
    
    try {

        const query = {
            text: 'SELECT audio_url FROM audio'
        }

        const audios = await pool.query(query)

        if (audios.rows.length === 0) {
            return res.status(404).json({error: "Audio not found"});
        }

        const collected_urls = audios.rows.map(audio => audio.audio_url)

        const query2 = {
            "enrollment_urls": collected_urls,
            "test_url": req.body.TestURL
        }

        const FastAPI_URL = process.env.FASTAPI_URL ?? "http://localhost:8000";

        const result = await sendAudio(`${FASTAPI_URL}/verify-speaker`, query2)

        if (!result) {
            return res.status(400).json({error: "Error with api"});
        }

        if (result.verified) {
            return res.status(200).json({verification: true});
        }

        return res.status(200).json({verification: false});

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Speaker verification failed",
            error_message: err.message,
        })

    }
}

export { getAudios, getAudio, addAudios, updateAudios, updateAudio, deleteAudios, deleteAudio, verifyAudio };

