const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log(`We're connected to Mongoose!`);
})

const passwordSchema = mongoose.Scheme({
  id: Number,
  name: String,
  site: String,
  password: String
});

const Password = mongoose.model('Password', passwordSchema);

const addPassword = (name, site, password, callback) => {
  Password.create(password)
    .then((results) => {
      callback(null, results);
    })
};

const getPassword = () => {
  Password.find({}, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  addPassword,
  getPassword
};