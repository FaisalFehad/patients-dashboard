const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 9090;

data = {
  personal: [
    {
      Patient_id: "P123wq3",
      Patient_id: "P123wq3",
      title: "Mr.",
      first_name: "John",
      middle_name: "Doe",
      surname: "Smith",
      dob: "13.05.80",
      age: "26",
      discount: "15%",
      first_name_address: "98 Hudson St, DUNCHURCH, CV22 3ZH",
      default_add: "079 4327 4373",
      mobile: "smith"
    }
  ],
  addresses: {
    work: "Flat 2 100 Lansdowne Place Hove United Kingdom East Sussex"
  }
};

// Controller
sendUser = (req, res, next) => {
  res.send(data);
};

// Router
app.get("/", sendUser);

// Server
app.listen(port, () => console.log(`API is listening on port ${port}`));
