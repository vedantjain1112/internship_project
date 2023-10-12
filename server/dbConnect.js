const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://jainvedant1211:vedant12321@cluster0.9xidsa1.mongodb.net/social_media?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
