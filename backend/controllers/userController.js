
const getUsers = async (req, res) => {
    
    try {

        const query = {
            text: 'SELECT * FROM user'
        }

        const users = await pool.query(query)

        res.status(200).json(users.rows);
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to get users",
            error_message: err.message,
        })
    }
}

const getUser = async (req, res) => {
    
    try {

        const query = {
            text: 'SELECT * FROM user WHERE UserID = $1',
            values: [req.params.UserID],
        }

        const users = await pool.query(query)

        res.status(200).json(users.rows[0])

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to get user",
            error_message: err.message,
        })

    }
}

const createUser = async (req, res) => {
    
    try {
    
        const query = {
            text: 'INSERT INTO user ($1, $2, $3, $4)',
            values: [req.params.UserID, req.params.UserName, req.params.UserPassword, req.params.UserEmail],
        }

        const users = await pool.query(query)

        res.status(200).json(users.rows[0])
    
    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to add user",
            error_message: err.message,
        })

    }
}

const deleteUser = async (req, res) => {

    try {

        const query = {
            text: 'DELETE FROM user WHERE userID = $1',
            values: [req.params.UserID]
        }

        const users = await pool.query(query)

        res.status(200).json(users.rows[0])

    } catch (err) {
        console.error(err);

        res.status(500).json({
            error: "Failed to delete user",
            error_message: err.message,
        })

    }

}

export { getUsers, getUser, createUser, deleteUser };

