
const mongoose = require("mongoose");

// Replace this with your MONGOURI.
// const MONGOURI = "mongodb+srv://Jumbopere:b16a18l5a@cluster0.kt39f.gcp.monogodb.net/admin"
const MONGOURI = "mongodb://127.0.0.1:27017/auth"

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;