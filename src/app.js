import express from 'express'
import dbConnect from './config/db.js'
import { admin, adminRouter } from './admin/admin.js'
import apiRouter from './api/v1/routes/index.js'

const app = express()

// Connect to database
dbConnect()

app.use(express.json())

// API Routes
app.use('/api/v1', apiRouter)

// AdminJS
app.use(admin.options.rootPath, adminRouter)

export default app
