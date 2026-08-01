import { pool } from './index.js';

export async function initializeDatabase() {


    await pool.query(`
        CREATE TABLE IF NOT EXISTS audio (
            audio_id SERIAL PRIMARY KEY,
            audio_url VARCHAR(255) NOT NULL 
        );    
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS website (
            website_id SERIAL PRIMARY KEY,
            website_url VARCHAR(255) NOT NULL 
        );    
    `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            user_id SERIAL PRIMARY KEY,
            user_name TEXT NOT NULL,
            user_password TEXT NOT NULL,
            user_email TEXT NOT NULL
        );    
    `);


}