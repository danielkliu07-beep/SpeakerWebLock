import express from 'express'

import { getAudios, getAudio, addAudios, updateAudios, updateAudio, deleteAudios, deleteAudio } from 'backend/controllers/audioController.js'

export const audioRouter = express.Router()

//You don't need to have /api/audio because app.use('/api', audioRouter) specified it
audioRouter.get('/audio', getAudios)
audioRouter.get('/audio/:id', getAudio)
audioRouter.post('/audio', addAudios)
audioRouter.put('/audio', updateAudios)
audioRouter.put('/audio/:id', updateAudio)
audioRouter.delete('/audio', deleteAudios)
audioRouter.delete('/audio/:id', deleteAudio)