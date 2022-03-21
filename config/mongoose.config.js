//import mongoose
const mongoose = require('mongoose');
const DB_NAME = "Jokes_DB"

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connection to ${DB_NAME}`))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
