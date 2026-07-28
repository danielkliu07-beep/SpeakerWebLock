import express from 'express'

import { audioController } from 'backend/controllers/audioController.js'
import { verificationController } from 'backend/controllers/verificationController.js'

export const apiRouter = express.Router()

//You don't need to have /api/audio because app.use('/api', apiRouter) specified it
apiRouter.get('/audio', audioController)
apiRouter.get('/services', verificationController)