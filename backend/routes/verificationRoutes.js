import express from 'express'

import { verificationController } from 'backend/controllers/verificationController.js'

export const verificationRouter = express.Router()

//You don't need to have /api/audio because app.use('/api', audioRouter) specified it
apiRouter.get('/services', verificationController)