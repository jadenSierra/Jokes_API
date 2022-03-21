// controller is what will do all the CRUD
//import model

const Joke = require("../models/jokes.model");

//read all
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};


module.exports.findRandomJoke = (req, res) => {
  let randIdArr = ["6238e6269d357a94b8d54cb3","6238e66b9d357a94b8d54cb6", "6238e798460d4e156f4a6ef9"]
  let randId = Math.floor(Math.random() * randIdArr.length)
  Joke.find({ _id: randIdArr[randId]})
    .then((allJokes) => res.json({ jokes: allJokes }))
    .catch((err) => res.json({ message: "something went wrong", error: err }));
};


module.exports.findOneSingleJoke = (req, res) => {
  // /api/users/:id
  Joke.findOne({ _id: req.params.id })
    .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => res.json({ joke: newlyCreatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => res.json({ joke: updatedJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
