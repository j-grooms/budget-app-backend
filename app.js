const express = require("express");
const cors = require("cors");

const { environment } = require("./config");
const isProduction = environment === "production";

const app = express();

// enable CORS in development
if (isProduction) app.use(cors())

app.get("/", (req, res) => res.json("Hello World"));

module.exports = app;
