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
