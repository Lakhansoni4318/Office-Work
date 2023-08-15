const mongoose = require("mongoose");

const Connection = async () => {
  const URL = `mongodb+srv://lakhansoni4318:lakhansoni1S@store.4zavngi.mongodb.net/`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = Connection;
