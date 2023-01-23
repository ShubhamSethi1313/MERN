const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());

dotenv.config({ path: "./config.env" });
require("./db/conn");
// const User = require('./model/userSchema')

app.use(express.json());

// link the router files to make our route easy
app.use(require("./router/auth"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running at port no ${PORT}`);
});
