import mongoose from "mongoose";

const { Schema } = mongoose;
const { String } = Schema.Types;

const cardSchema = new Schema({
  character: String,
  frame: String,
  keyword: String,
  topNote: String,
  middleNote: String,
  bottomNote: String,
});

export const CardModel = mongoose.model('Card', cardSchema);
