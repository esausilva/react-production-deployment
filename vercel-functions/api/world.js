module.exports = (req, res) => {
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
};
