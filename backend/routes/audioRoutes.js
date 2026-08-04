import express from 'express'

import { getAudios, getAudio, addAudios, deleteAudios, deleteAudio, verifyAudio } from '../controllers/audioController.js'

export const audioRouter = express.Router()

//You don't need to have /api/audio because app.use('/api', audioRouter) specified it
audioRouter.get('/audio', getAudios)
audioRouter.post('/audio', addAudios)
audioRouter.delete('/audio', deleteAudios)
audioRouter.get('/audio/verify', verifyAudio)
audioRouter.get('/audio/:id', getAudio)
audioRouter.delete('/audio/:id', deleteAudio)