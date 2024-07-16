import mongoose from 'mongoose'

const uri = 'mongodb://localhost:27017/fixerrcode'

const dbConnect = async () => {
  try {
    await mongoose.connect(uri)
    console.log('Connected to database')
  } catch (error) {
    console.error(error)
  }
}
export default dbConnect
