import express from 'express'

import { getUrls, addUrls, deleteUrls, deleteUrl, checkUrl } from '../controllers/urlController.js'

export const urlRouter = express.Router()

urlRouter.get('/url', getUrls)
urlRouter.post('/url', addUrls)
urlRouter.post('/url/check', checkUrl)
urlRouter.delete('/url', deleteUrls)
urlRouter.delete('/url/:id', deleteUrl)