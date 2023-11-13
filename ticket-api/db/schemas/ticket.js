import { model, Schema, SchemaTypes } from "mongoose";

export const ticketSchema = new Schema({
  channelId: String,
  messageId: String,
  category: {
    type: SchemaTypes.ObjectId,
    ref: 'TicketCategory'
  },
  creator: String,
  createdAt: Date,
  claimedBy: String,
  claimedAt: Date,
  messages: [{
    type: SchemaTypes.ObjectId,
    ref: 'TicketMessage'
  }],
  lastUpdatedAt: Date,
  lastUpdatedBy: String
});

module.exports = model('Ticket', ticketSchema);