import express from 'express'
import errorCodeRouter from './errorCodeRoutes.js'

const apiRouter = express.Router()

apiRouter.use('/error', errorCodeRouter)

export default apiRouter
