import express from 'express'

import { getUsers, getUser, createUser, deleteUser, checkUser } from '../controllers/userController.js'

export const userRouter = express.Router()

userRouter.get('/user', getUsers)
userRouter.post('/user', createUser)
userRouter.post('/user/check', checkUser)
userRouter.get('/user/:id', getUser)
userRouter.delete('/user/:id', deleteUser)