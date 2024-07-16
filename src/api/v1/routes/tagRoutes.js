import express from 'express'
import { listTags, getTagsErrorCode } from '../controllers/tagController.js'

const tagRouter = express.Router()

tagRouter.get('/', listTags)
tagRouter.get('/error/:code', getTagsErrorCode)

export default tagRouter
