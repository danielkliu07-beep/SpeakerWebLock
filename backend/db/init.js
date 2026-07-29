import { pool } from 'backend/db/index.js';

export async function initializeDatabase() {

    await pool.query(`
        CREATE TABLE IF NOT EXISTS audio (
            AudioID SERIAL PRIMARY KEY,
            AudioURL VARCHAR(255) NOT NULL 
        );    
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS website (
            WebsiteID SERIAL PRIMARY KEY,
            WebsiteURL VARCHAR(255) NOT NULL 
        );    
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS user (
            userID SERIAL PRIMARY KEY,
            username TEXT NOT NULL 
            password TEXT NOT NULL
            email TEXT NOT NULL
        );    
    `);


}