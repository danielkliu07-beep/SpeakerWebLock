
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
            error: "Failed to get website urls",
            error_message: err.message,
        })
    }

}

const addUrls = async (req, res) => {
    try {
    
        const query = {
            text: 'INSERT INTO website ($1, $2)',
            values: [req.params.WebsiteID, req.params.WebsiteURL],
        }

        const websites = await pool.query(query)

        res.status(200).json(websites.rows[0])
    
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to add website url",
            error_message: err.message,
        })

    }
}

const deleteUrls = async (req, res) => {

    try {
    
        const query = {
            text: 'DELETE FROM website',
        }

        const websites = await pool.query(query)

        res.status(200).json(websites.rows)

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to delete website urls",
            error_message: err.message,
        })

    }

}

const deleteUrl = async (req, res) => {

    try {

        const query = {
            text: 'DELETE FROM website WHERE websiteID = $1',
            values: [req.params.WebsiteID]
        }

        const websites = await pool.query(query)

        res.status(200).json(websites.rows[0])

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to delete website url",
            error_message: err.message,
        })

    }

}

export { getUrls, addUrls, deleteUrls, deleteUrl };

