const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
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
    enum: ['user', 'contributor', 'admin'],
    default: 'user'
  }
},
{ timestamps: true }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()

  try {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  } catch (error) {
    next(error)
  }
})

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

userSchema.statics.findByCredentials = async function (email, password) {
  const user = await this.findOne({ email })
  if (!user) throw new Error('Invalid login or password')
  const isMatch = await user.comparePassword(password)
  if (!isMatch) throw new Error('Invalid login or password')
  return user
}

module.exports = mongoose.model('User', userSchema)
