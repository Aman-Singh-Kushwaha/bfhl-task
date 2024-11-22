// src/middlewares/validateRequest.js
const validateRequest = (req, res, next) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
      return res.status(400).json({ error: "'data' must be an array of strings." });
  }

  const invalidEntries = data.filter((item) => typeof item !== 'string');
  if (invalidEntries.length > 0) {
      return res.status(400).json({
          error: `'data' contains invalid entries. Only strings are allowed.`,
          invalidEntries,
      });
  }

  next();
};

module.exports = validateRequest;
