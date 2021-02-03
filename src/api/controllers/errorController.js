exports.errorControler = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      ...error,
      message: error.message,
    },
  });
};
