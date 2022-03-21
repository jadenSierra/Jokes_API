const express = require("express");
const app = express();


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
require("./config/mongoose.config");


//import routes

require("./routes/jokes.routes")(app)






const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
