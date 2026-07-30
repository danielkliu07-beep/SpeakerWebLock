import express from 'express'

import { getUrls, addUrls, deleteUrls, deleteUrl, checkWebsite } from 'backend/controllers/urlController.js'

export const urlRouter = express.Router()

urlRouter.get('/url', getUrls)
urlRouter.post('/url', addUrls)
urlRouter.delete('/url', deleteUrls)
urlRouter.delete('/url/:id', deleteUrl)
urlRouter.get('/url/check', checkWebsite)