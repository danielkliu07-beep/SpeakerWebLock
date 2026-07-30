
const getUrls = async (req, res) => {

    try {

        const query = {
            text: 'SELECT * FROM website'
        }

        const websites = await pool.query(query)

        res.status(200).json(websites.rows);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to get websites",
            error_message: err.message,
        })
    }

}

const addUrls = async (req, res) => {
    
}

const deleteUrls = async (req, res) => {

}

const deleteUrl = async (req, res) => {

}

export { getUrls, addUrls, deleteUrls, deleteUrl };

