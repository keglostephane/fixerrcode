import errorCode from '../models/errorCode.js'

export const listErrorCodes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const totalItems = await errorCode.countDocuments()
    const errorCodes = await errorCode.find()
      .skip((page - 1) * limit)
      .limit(limit)

    res.status(200).json({
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      nextPage: page < Math.ceil(totalItems / limit) ? page + 1 : null,
      items: errorCodes
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getErrorDetails = async (req, res) => {
  try {
    const error = await errorCode.findOne({ code: req.params.code })
    if (!error) {
      return res.status(404).json({ message: 'Error code not found' })
    }
    res.status(200).json(error)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getErrorMessage = async (req, res) => {
  try {
    const error = await errorCode.findOne({ code: req.params.code })
    if (!error) {
      return res.status(404).json({ message: 'Error code not found' })
    }
    res.status(200).json(error)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
