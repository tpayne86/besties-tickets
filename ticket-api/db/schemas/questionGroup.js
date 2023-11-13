import { model, Schema, SchemaTypes } from "mongoose";

export const questionGroupSchema = new Schema({
  customId: String,
  pageNum: Number,
  questions: [{
    type: SchemaTypes.ObjectId,
    ref: 'Question'
  }],
  embed: {
    type: SchemaTypes.ObjectId,
    ref: 'Embed'
  }
})

module.exports = model('QuestionGroup', questionGroupSchema)