module.exports = (req, res, next) => {
  const { id, value, timestamp } = req.body;

  if (
    typeof id !== "number" ||
    typeof value !== "string" ||
    typeof timestamp !== "number"
  ) {
    return res.status(400).json({ message: "Invalid request data" });
  }

  next();
};
