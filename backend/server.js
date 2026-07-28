import express from 'express'
import { audioRouter } from 'backend/routes/audioRoutes.js'
import { verificationRouter } from 'backend/routes/verificationRoutes.js'

import cors from 'cors'

const PORT = 8000

const app = express()

app.use(cors())

app.use('/api', audioRouter)
app.use('/api', verificationRouter)

app.use((req, res) => {
    res.status(404).json({message: 'Endpoint not found'})
})


app.listen(PORT, () => console.log('listening at 8000'))

