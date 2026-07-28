import express from 'express'

const app = express()

const apiRouter = express.Router()


//You don't need to have /api/audio because app.use('/api', apiRouter) specified it
apiRouter.get('/audio', audioController)
apiRouter.get('/services', verificationController)

app.use('/api', apiRouter)

