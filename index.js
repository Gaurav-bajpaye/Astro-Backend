const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");
const bodyparser = require("body-parser");
require("dotenv").config();
const uri = process.env.MONGO_URI;
const app = express();

const astroLogerRoutes = require("./routes/astrologerRoutes")

app.use(cors({ origin: true, credentials: true }));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(astroLogerRoutes)



const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(uri);
    console.log("Connected to Database...");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();