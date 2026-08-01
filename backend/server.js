import express from 'express'

import { audioRouter } from './routes/audioRoutes.js'
import { urlRouter } from './routes/urlRoutes.js'
import { userRouter } from './routes/userRoutes.js'

import { initializeDatabase } from './db/init.js'
import { config } from './db/config.js'

import cors from 'cors'
import path from "path"
import dotenv from 'dotenv'

dotenv.config({path: './env'})

const PORT = Number(config.APP_PORT) || 3000;

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', audioRouter)
app.use('/api', urlRouter)
app.use('/api', userRouter)

app.get("/api", (req, res) => {
    res.status(200).json({ message: "Server running" })
})

app.use((req, res) => {
    res.status(404).json({message: 'Endpoint not found'})
})


async function start() {
    try {
        await initializeDatabase();

        app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`))

    } catch (err) {
        console.error(err);
    }
}

start();


