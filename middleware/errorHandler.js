export default (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 300 : res.statusCode;
  res.status(statusCode);
  console.log(err);
  res.json({
    msg: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
