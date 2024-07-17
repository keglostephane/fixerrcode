import user from '../api/v1/models/user.js'
export const authenticate = async (email, password) => {
  return user.findByCredentials(email, password)
}
