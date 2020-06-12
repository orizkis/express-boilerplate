const MongoClient = require("mongodb").MongoClient;
const {
  mongodb: { url, database }
} = require("../configs");

const mongodb = new MongoClient(url, { useUnifiedTopology: true });

let collections = {};
mongodb.connect(function(err) {
  if (err) {
    console.error("mongodb : ", err.message);
    return;
  }
  console.log("mongodb connected");
  const db = mongodb.db(database);
  collections.logger = db.collection("logger");
});

const cleanMongodb = () => {
  mongodb.close(() => {
    console.log("mongodb has ended");
  });
};

module.exports = {
  collections,
  cleanMongodb
};
