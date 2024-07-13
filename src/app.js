import express from 'express'
import dbConnect from './config/db.js'
import { admin, adminRouter } from './admin/admin.js'

const app = express()

// Connect to database
dbConnect()

// AdminJS
app.use(admin.options.rootPath, adminRouter)

export default app
