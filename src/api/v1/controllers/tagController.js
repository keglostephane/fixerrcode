import errorCode from '../models/errorCode.js'
import tag from '../models/tag.js'

export const listTags = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const totalItems = await tag.countDocuments()
    const tags = await tag.find()
      .skip((page - 1) * limit)
      .limit(limit)

    res.status(200).json({
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page,
      nextPage: page < Math.ceil(totalItems / limit) ? page + 1 : null,
      tags
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

export const getTagsErrorCode = async (req, res) => {
  try {
    const error = await errorCode.findOne({ code: req.params.code }).populate('tags')

    if (!error) {
      return res.status(404).json({ message: 'Error code not found' })
    }

    const totalItems = error.tags.length
    res.status(200).json({
      totalItems,
      tags: error.tags
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
