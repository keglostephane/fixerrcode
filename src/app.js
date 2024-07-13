import express from 'express'
import dbConnect from './config/db.js'

const app = express()

dbConnect()

export default app
