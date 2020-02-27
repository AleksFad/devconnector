const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoURI');
mongoose.set('useCreateIndex', true);
const connect_db = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log('connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connect_db;
