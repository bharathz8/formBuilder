import mongoose from 'mongoose';

const ResponseSchema = new mongoose.Schema({
    formId: { type: mongoose.Schema.Types.ObjectId, required: true},
    responses: [
        {
            questionId: {type: mongoose.Schema.Types.ObjectId, required: true},
            response: {type: String, required: true}
        }
    ],
}, {timestamps: true});

export const Response = mongoose.model("Response", ResponseSchema);