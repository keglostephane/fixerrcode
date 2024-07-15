import express from 'express'
import {
  listErrorCodes,
  getErrorDetails,
  getErrorMessage
} from '../controllers/errorCodeController.js'

const errorCodeRouter = express.Router()

errorCodeRouter.get('/', listErrorCodes)
errorCodeRouter.get('/:code', getErrorDetails)
errorCodeRouter.get('/:code/message', getErrorMessage)

export default errorCodeRouter
