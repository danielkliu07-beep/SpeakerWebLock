import "dotenv/config"

export const config = {
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    APP_PORT: process.env.APP_PORT
}

if (process.env === undefined) {
    throw new Error("Environment variables not defined in env")
}

if (process.env.DB_USER === undefined) {
    throw new Error("DB_USER not defined in env")
}

if (process.env.DB_PASSWORD === undefined) {
    throw new Error("DB_PASSWORD not defined in env")
}

if (process.env.DB_HOST === undefined) {
    throw new Error("DB_HOST not defined in env")
}

if (process.env.DB_PORT === undefined) {
    throw new Error("DB_PORT not defined in env")   
}

if (process.env.DB_NAME === undefined) {
    throw new Error("DB_NAME not defined in env")   
}

if (process.env.APP_PORT === undefined) {
    throw new Error("APP_PORT not defined in env")
}