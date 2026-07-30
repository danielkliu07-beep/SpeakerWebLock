import express from 'express'
import { audioRouter } from 'backend/routes/audioRoutes.js'
import { verificationRouter } from 'backend/routes/verificationRoutes.js'
import { urlRouter } from 'backend/routes/urlRoutes.js'
import { userRouter } from 'backend/routes/userRoutes.js'
import { websiteRouter } from 'backend/routes/websiteRoutes.js'

import { initializeDatabase } from './db/init'

import cors from 'cors'

const PORT = 8000

const app = express()

app.use(cors())

app.use('/api', audioRouter)
app.use('/api', verificationRouter)
app.use('/api', urlRouter)
app.use('/api', userRouter)
app.use('/api', websiteRouter)

app.use((req, res) => {
    res.status(404).json({message: 'Endpoint not found'})
})

async function start() {
    try {
        await initializeDatabase();

        app.listen(PORT, () => console.log('listening at 8000'))

    } catch (err) {
        console.error(err);
    }
}

start();


