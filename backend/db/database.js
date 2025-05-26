const mongoose = require("mongoose");
const config = require("../config/config");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(config.dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};