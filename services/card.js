import { CardModel } from "../models/card.js";

export const getCards = async () => {
  return CardModel.find();
};

export const createCard = async ({
  character,
  frame,
  keyword,
  topNote,
  middleNote,
  bottomNote 
}) => {
  await CardModel.create({
    character,
    frame,
    keyword,
    topNote,
    middleNote,
    bottomNote
  });
};
