const moment = require("moment");
const { collections } = require("../mongodb");

const inputLog = data => {
  let time = { time: moment().format() };
  collections.logger.insertOne({ ...data, ...time });
};

module.exports = {
  inputLog
};
