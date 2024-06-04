export const sendSuccessResponse = async ({ data, res } = {}) => {
  await res.json({ status: "ok", data });
};

export const sendErrorResponse = async ({ data, message, res } = {}) => {
  res.setStatus(500);
  await res.json({ status: "fail", data, message });
};
