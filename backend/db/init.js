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
        CREATE TABLE IF NOT EXISTS users (
            UserID SERIAL PRIMARY KEY,
            UserName TEXT NOT NULL,
            UserPassword TEXT NOT NULL,
            UserEmail TEXT NOT NULL
        );    
    `);


}