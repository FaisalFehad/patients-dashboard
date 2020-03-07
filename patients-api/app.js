const express = require("express");
const cors = require("cors");
const app = express();
const port = 9090;

// controller
sendUser = (req, res, next) => {
  res.send("hello");
};

app.get("/", sendUser);

app.listen(port, () => console.log(`API Listening on port ${port}!`));
