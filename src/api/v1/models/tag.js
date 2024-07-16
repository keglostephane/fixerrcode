import { Schema, model } from 'mongoose'

const tagSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  description: {
    type: String,
    trim: true
  }
})

export default model('Tag', tagSchema)
