import express from 'express'

import { verifySpeaker } from 'backend/controllers/verificationController.js'

export const verificationRouter = express.Router()

verificationRouter.get('/verification', verifySpeaker)
