const { Schema, SchemaTypes } = require("mongoose");

export const ticketCategorieSchema = new Schema({
  name: String,
  description: String,
  guildId: {
    type: SchemaTypes.ObjectId,
    ref: 'Guild'
  },
  tickets: [{
    type: SchemaTypes.ObjectId,
    ref: 'Ticket'
  }],
  createdBy: String,
  channelId: String,
  panels: [{
    type: SchemaTypes.ObjectId,
    ref: 'Panel'
  }],
  questionGroups: [{
    type: SchemaTypes.ObjectId,
    ref: 'QuestionGroup'
  }]
})
