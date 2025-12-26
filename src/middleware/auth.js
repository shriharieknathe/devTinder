const adminAuth = (req, res, next) => {
  const token = "s";

  if (token === "xyz") {
    next();
  } else {
    res.status(401).send("Unauthorized data");
  }
};

module.exports = {
  adminAuth,
};
