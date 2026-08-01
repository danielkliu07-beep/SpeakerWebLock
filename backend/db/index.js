import { Pool } from 'pg'
import { config } from './config.js'

const connection_information = {
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    host: config.DB_HOST,
    port: Number(config.DB_PORT),
    database: config.DB_NAME

}

export const pool = new Pool(connection_information)

