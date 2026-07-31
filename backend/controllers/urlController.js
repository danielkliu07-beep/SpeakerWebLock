
const getUrls = async (req, res) => {

    try {

        const query = {
            text: 'SELECT * FROM website'
        }

        const websites = await pool.query(query)

        if (websites.rows.length === 0) {
            return res.status(404).json({error: "Website not found"});
        }

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
            text: 'INSERT INTO website (WebsiteURL) VALUES ($1) RETURNING *',
            values: [req.body.WebsiteURL], 
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
            text: 'DELETE FROM website WHERE website_id = $1',
            values: [req.params.id]
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

const checkUrl = async (req, res) => {

    try {

        const query = {
            text: 'SELECT * FROM website'
        }

        const websites = await pool.query(query)

        for (const website of websites.rows) {
            if (req.body.WebsiteURL === website.WebsiteURL) {
                return res.status(200).json({"check": true});
            }
        }

        res.status(200).json({"check": false});

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to check if the website url is in the database",
            error_message: err.message,
        })
    }

}

export { getUrls, addUrls, deleteUrls, deleteUrl, checkUrl };

