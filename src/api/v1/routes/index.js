import express from 'express'
import errorCodeRouter from './errorCodeRoutes.js'
import tagRouter from './tagRoutes.js'

const apiRouter = express.Router()

apiRouter.use('/error', errorCodeRouter)
apiRouter.use('/tag', tagRouter)

export default apiRouter
