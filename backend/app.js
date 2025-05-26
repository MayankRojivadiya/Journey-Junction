const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const config = require("./config/config.js");
const { connect } = require("./db/database.js");

const app = express();

dotenv.config();
app.use(
  cors({
    origin: config.cors_origin,
    credentials: true,
  })
);



connect();
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Import Routes
const authRoutes = require("./routes/authRoutes.js")

//Routes
app.use("/api/auth", authRoutes)


app.listen(config.port, () => {
  console.log(`⚙ Server is running at port : ${config.port}`);
});
