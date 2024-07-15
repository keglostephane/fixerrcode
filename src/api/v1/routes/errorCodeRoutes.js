import express from 'express'
import {
  listErrorCodes,
  getErrorDetails,
  getErrorMessage,
  getErrorTags,
  getErrorSolutions
} from '../controllers/errorCodeController.js'

const errorCodeRouter = express.Router()

errorCodeRouter.get('/', listErrorCodes)
errorCodeRouter.get('/:code', getErrorDetails)
errorCodeRouter.get('/:code/message', getErrorMessage)
errorCodeRouter.get('/:code/tags', getErrorTags)
errorCodeRouter.get('/:code/solutions', getErrorSolutions)

export default errorCodeRouter
