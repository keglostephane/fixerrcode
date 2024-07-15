import express from 'express'
import { listErrorCodes, getErrorDetails } from '../controllers/errorCodeController.js'

const errorCodeRouter = express.Router()

errorCodeRouter.get('/', listErrorCodes)
errorCodeRouter.get('/:code', getErrorDetails)

export default errorCodeRouter
