import mongoose from 'mongoose'
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { Database, Resource } from '@adminjs/mongoose'

import User from '../api/v1/models/user.js'
import Tag from '../api/v1/models/tag.js'

AdminJS.registerAdapter({ Database, Resource })

const admin = new AdminJS({
  databases: [mongoose],
  rootPath: '/admin',
  resources: [
    { resource: User },
    { resource: Tag }
  ],
  branding: {
    companyName: 'FixErrCode'
  }
})

const adminRouter = AdminJSExpress.buildRouter(admin)

export { admin, adminRouter }
