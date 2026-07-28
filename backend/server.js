import express from 'express'
import { apiRouter } from 'backend/routes/apiRoutes.js'


const app = express()

app.use('/api', apiRouter)

app.use((req, res) => {
    res.status(404).json({message: 'Endpoint not found'})
})


app.listen(8000, () => console.log('listening at 8000'))

