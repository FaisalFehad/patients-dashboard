const express = require("express");
const cors = require("cors");
const app = express();
const data = require("./data");
const port = 9090;

app.use(cors());

// Controller
sendUser = (req, res, next) => {
  res.send(data);
};

// Router
app.get("/", sendUser);

// Server
app.listen(port, () => console.log(`API is listening on port ${port}`));
