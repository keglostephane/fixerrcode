import express from 'express'
import errorCodeRouter from './errorCodeRoutes.js'
import tagRouter from './tagRoutes.js'

const apiRouter = express.Router()

apiRouter.use('/errors', errorCodeRouter)
apiRouter.use('/tags', tagRouter)

export default apiRouter
