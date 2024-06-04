import { sendErrorResponse, sendSuccessResponse } from '../utils/response.js';
import * as cardService from '../services/card.js';

export const getCards = async (req, res) => {
  try {
    const data = await cardService.getCards();
    await sendSuccessResponse({ data, res });
  } catch (err) {
    console.error(err);
    await sendErrorResponse({ res, });
  }
};

export const createCard = async (req, res) => {
  try {
    const {

    } = req.body;
    const data = await cardService.createCard(req.body);
    await sendSuccessResponse({ data, res });
  } catch (err) {
    console.error(err);
    await sendErrorResponse({ res, });
  }
};
