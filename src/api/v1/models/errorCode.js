import { Schema, model } from 'mongoose'

const errorCodeSchema = Schema({
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  errorType: {
    type: String,
    enum: ['Hardware', 'Software'],
    required: true
  },
  errorLevel: {
    type: String,
    enum: ['error', 'warning', 'info'],
    required: true
  },
  reasons: {
    type: [String]
  },
  solutions: {
    type: [Schema.Types.ObjectId],
    ref: 'Solution',
    required: true
  },
  ErrorTag: {
    type: [Schema.Types.ObjectId],
    ref: 'Tag'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
},
{ timestamps: true }
)

export default model('ErrorCode', errorCodeSchema)
