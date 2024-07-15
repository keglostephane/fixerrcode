import express from 'express'
import { listErrorCodes } from '../controllers/errorCodeController.js'

const errorCodeRouter = express.Router()

errorCodeRouter.get('/', listErrorCodes)

export default errorCodeRouter
