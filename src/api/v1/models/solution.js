import { Schema, model } from 'mongoose'

const solutionSchema = Schema({
  errorCode: {
    type: Schema.Types.ObjectId,
    ref: 'ErrorCode',
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  steps: {
    type: [String],
    trim: true,
    required: true
  },
  status: {
    type: String,
    enum: ['Verified', 'Unverified']
  },
  tags: {
    type: [Schema.Types.ObjectId],
    ref: 'Tag'
  },
  links: {
    type: [String],
    trim: true
  }
}, { timestamps: true }
)

export default model('Solution', solutionSchema)
