import errorCode from '../models/errorCode.js'

export const listErrorCodes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const totalItems = await errorCode.countDocuments()
    const errorCodes = await errorCode.find()
      .populate('tags', 'name')
      .populate('solutions', 'orders title description steps links')
      .populate('author', 'username')
      .skip((page - 1) * limit)
      .limit(limit)

    res.status(200).json({
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      nextPage: page < Math.ceil(totalItems / limit) ? page + 1 : null,
      errors: errorCodes
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getErrorDetails = async (req, res) => {
  try {
    const error = await errorCode.findOne({ code: req.params.code })
      .populate('tags', 'name')
      .populate('solutions', 'orders title description steps links')
      .populate('tags', 'name')

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
    res.status(200).json({ description: error.description })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getErrorTags = async (req, res) => {
  try {
    const error = await errorCode.findOne({ code: req.params.code })
      .populate('tags')
    const totalItems = error.tags.length

    if (!error) {
      return res.status(404).json({ message: 'Error code not found' })
    }
    res.status(200).json({
      totalItems,
      tags: error.tags
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getErrorSolutions = async (req, res) => {
  try {
    const error = await errorCode.findOne({ code: req.params.code }).populate('solutions')
    if (!error) {
      return res.status(404).json({ message: 'Error code not found' })
    }
    const numErrorSolutions = error.solutions.length
    res.status(200).json({
      totalItems: numErrorSolutions,
      solutions: error.solutions
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
