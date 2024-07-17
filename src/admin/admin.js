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
    {
      resource: User,
      options: {
        properties: {
          _id: { isVisible: { list: false, filter: false, show: true, edit: false } },
          username: { isVisible: { list: true, filter: true, show: true, edit: true } },
          email: { isVisible: { list: true, filter: true, show: true, edit: false } },
          password: { isVisible: { list: false, filter: false, show: true, edit: true } },
          role: { isVisible: { list: false, filter: true, show: true, edit: true } },
          createdAt: { isVisible: { list: false, filter: false, show: true, edit: false } },
          updatedAt: { isVisible: { list: false, filter: false, show: true, edit: false } }
        }
      }
    },
    {
      resource: errorCode,
      options: {
        properties: {
          _id: { isVisible: { list: false, filter: false, show: true, edit: false } },
          code: { isVisible: { list: true, filter: true, show: true, edit: true } },
          description: { isVisible: { list: true, filter: false, show: true, edit: true } },
          errorType: { isVisible: { list: false, filter: true, show: true, edit: true } },
          errorLevel: { isVisible: { list: false, filter: true, show: true, edit: true } },
          reasons: { isVisible: { list: false, filter: false, show: true, edit: true } },
          solutions: { isVisible: { list: false, filter: false, show: true, edit: true } },
          tags: { isVisible: { list: false, filter: true, show: true, edit: true } },
          author: { isVisible: { list: false, filter: true, show: true, edit: true } },
          createdAt: { isVisible: { list: false, filter: false, show: true, edit: false } },
          updatedAt: { isVisible: { list: false, filter: false, show: true, edit: false } }
        }
      }
    },
    {
      resource: solution,
      options: {
        properties: {
          _id: { isVisible: { list: false, filter: false, show: true, edit: false } },
          errorCode: { isVisible: { list: true, filter: true, show: true, edit: true } },
          order: { isVisible: { list: false, filter: false, show: true, edit: true } },
          title: { isVisible: { list: true, filter: false, show: true, edit: true } },
          author: { isVisible: { list: false, filter: true, show: true, edit: true } },
          description: { isVisible: { list: false, filter: false, show: true, edit: true } },
          steps: { isVisible: { list: false, filter: false, show: true, edit: true } },
          status: { isVisible: { list: false, filter: false, show: true, edit: true } },
          tags: { isVisible: { list: false, filter: true, show: true, edit: true } },
          links: { isVisible: { list: false, filter: false, show: true, edit: true } },
          createdAt: { isVisible: { list: false, filter: false, show: true, edit: false } },
          updatedAt: { isVisible: { list: false, filter: false, show: true, edit: false } }
        }
      }
    },
    {
      resource: Tag,
      options: {
        properties: {
          _id: { isVisible: { list: false, filter: false, show: true, edit: false } },
          name: { isVisible: { list: true, filter: true, show: true, edit: true } },
          description: { isVisible: { list: false, filter: false, show: true, edit: true } }
        }
      }
    }
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
