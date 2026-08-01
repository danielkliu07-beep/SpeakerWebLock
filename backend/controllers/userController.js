import { pool } from "../db/index.js"


const getUsers = async (req, res) => {
    
    try {

        const query = {
            text: 'SELECT user_id, user_name, user_email FROM users'
        }

        const users = await pool.query(query)

        if (users.rows.length === 0) {
            return res.status(404).json({error: "Users not found"});
        }
        

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
            text: 'SELECT user_id, user_name, user_email FROM users WHERE user_id = $1',
            values: [req.params.id],
        }

        const users = await pool.query(query)

        if (users.rows.length === 0) {
            return res.status(404).json({error: "Users not found"});
        }

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
            text: 'INSERT INTO users (UserName, UserPassword, UserEmail) VALUES ($1, $2, $3) RETURNING user_id, user_name, user_email',
            values: [req.body.UserName, req.body.UserPassword, req.body.UserEmail],
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
            text: 'DELETE FROM users WHERE user_id = $1',
            values: [req.params.id]
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

