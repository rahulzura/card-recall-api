export const validateEnv = () => {
  const required = ['SERVER_HOST', 'SERVER_PORT', 'MONGO_URI'];

  const missing = required.filter((item) => !process.env[item]);
  if (missing.length) throw new Error(`Missing environment variables: ${missing}`);
};
