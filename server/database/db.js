import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-tiq5l2h-shard-00-00.xkkaaf5.mongodb.net:27017,ac-tiq5l2h-shard-00-01.xkkaaf5.mongodb.net:27017,ac-tiq5l2h-shard-00-02.xkkaaf5.mongodb.net:27017/cluster0?ssl=true&replicaSet=atlas-ix71mk-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewURLParser: true,
    });
    console.log("Connected To Database Successfully");
  } catch (error) {
    console.log("Error While Connecting To Database", error);
  }
};

export default Connection;
