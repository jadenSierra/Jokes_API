//import mongoose to build the model
const mongoose = require('mongoose')

//schema - rules that the entries must follow

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "setup must be atlease 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must have atleast 3 characters"]
    }
}, {timestamps: true});

//the model - this is what we use to make the actual queries to the DB

const Joke = mongoose.model("Joke", JokeSchema);

//export the model

module.exports = Joke;