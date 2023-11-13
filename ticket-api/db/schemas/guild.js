const { Schema, SchemaTypes, model } = require("mongoose");

export const guildSchema = new Schema({
  id: String,
  registeredAt: {
    type: Date,
    default: Date.now()
  },
  registeredBy: String,
  tickets: [{
    type: SchemaTypes.ObjectId,
    ref: "Ticket"
  }],
  channelId: String,
  ticketCategories: [{
    type: SchemaTypes.ObjectId,
    ref: 'TicketCategory'
  }]
});

module.exports = model('Guild', guildSchema);