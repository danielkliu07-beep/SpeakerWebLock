import { pool } from "../db"


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
            text: 'SELECT * FROM audio WHERE AudioID = $1',
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
            text: 'DELETE FROM audio WHERE AudioID = $1',
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

}

export { getAudios, getAudio, addAudios, updateAudios, updateAudio, deleteAudios, deleteAudio, verifyAudio };

