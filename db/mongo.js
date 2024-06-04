import mongoose from 'mongoose';

const { MONGO_URI } = process.env;

export const initMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Successfully connected to mongo.');
  } catch (err) {
    console.error('❌ Failed to connect to mongo', err);
    throw err;
  }
};
