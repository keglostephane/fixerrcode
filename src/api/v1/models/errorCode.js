import { Schema, model } from 'mongoose'

const errorCodeSchema = Schema({
  code: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  errorType: {
    type: String,
    enum: ['hardware', 'software'],
    required: true
  },
  errorLevel: {
    type: String,
    enum: ['error', 'warning', 'info'],
    required: true
  },
  reasons: {
    type: [String],
    trim: true
  },
  solutions: {
    type: [Schema.Types.ObjectId],
    ref: 'Solution'
  },
  tags: {
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
