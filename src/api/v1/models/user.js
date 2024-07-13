import { Schema, model } from 'mongoose'
import { genSalt, hash, compare } from 'bcrypt'

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /\S+@\S+\.\S+/
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  role: {
    type: String,
    enum: ['User', 'Contributor', 'Admin'],
    default: 'user'
  }
},
{ timestamps: true }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  try {
    const salt = await genSalt(10)
    this.password = await hash(this.password, salt)
  } catch (error) {
    next(error)
  }
})

userSchema.methods.comparePassword = async function (password) {
  return await compare(password, this.password)
}

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({ email })
  if (!user) throw new Error('Invalid login or password')
  const isMatch = await user.comparePassword(password)
  if (!isMatch) throw new Error('Invalid login or password')
  return user
}

export default model('User', userSchema)
