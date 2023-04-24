// connection.js
const mongoose = require("mongoose");

//const connection = "mongodb://127.0.0.1:27017/mongo-test";
//const connection = "mongodb://127.0.0.1:27017/my-app";
const connection = "mongodb://db:27017/my-app";

const connectDb = () => {
  //   return mongoose.connect(connection);
  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    directConnection: true,
  });
};

module.exports = connectDb;
