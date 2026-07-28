import express from 'express'

import { checkWebsite } from 'backend/controllers/websiteController.js'

export const websiteRouter = express.Router()

websiteRouter.get('/website', checkWebsite)
