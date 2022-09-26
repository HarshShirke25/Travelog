const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const app = express();

dotenv.config({ path: "./config.env" });

const port = process.env.PORT;

require("./db/conn");

app.use(express.json());

app.use(require("./router/auth"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log(`Server running successfully as port ${port}`);
});
