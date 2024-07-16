import mongoose from 'mongoose'
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import { Database, Resource } from '@adminjs/mongoose'
import { authenticate } from '../utils/authenticate.js'

import User from '../api/v1/models/user.js'
import errorCode from '../api/v1/models/errorCode.js'
import Tag from '../api/v1/models/tag.js'
import solution from '../api/v1/models/solution.js'

AdminJS.registerAdapter({ Database, Resource })

const admin = new AdminJS({
  databases: [mongoose],
  rootPath: '/admin',
  resources: [
    { resource: User, options: {} },
    { resource: errorCode, options: {} },
    { resource: solution, options: {} },
    { resource: Tag, options: {} }
  ],
  branding: {
    companyName: 'FixErrCode'
  }
})

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(admin, {
  authenticate,
  cookieName: 'adminjs',
  cookiePassword: 'secret'
},
null,
{
  resave: true,
  saveUninitialized: true
})

export { admin, adminRouter }
