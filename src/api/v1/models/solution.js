import { Schema, model } from 'mongoose'

const solutionSchema = Schema({
    errorCode: {
        type: Schema.Types.ObjectId,
        ref: 'ErrorCode',
        required: true
    },
    title: {
        type: String,
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
    },
    status: {
        type: String,
        enum: ['Verified', 'Unverified'],
    },
    tags: {
        type: [Schema.Types.ObjectId],
        ref: 'Tag',
    },
    links: {
        type: [String]
    },
}, { timestamps: true }
)

export default model('Solution', solutionSchema)