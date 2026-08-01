import express from 'express'

import { getUsers, getUser, createUser, deleteUser } from '../controllers/userController.js'

export const userRouter = express.Router()

userRouter.get('/user', getUsers)
userRouter.get('/user/:id', getUser)
userRouter.post('/user', createUser)
userRouter.delete('/user/:id', deleteUser)