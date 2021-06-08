const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
  app.get("/api/jokes/", JokeController.findAllJokes);                       //findAllUsers
  app.get("/api/jokes/:id", JokeController.findOneSingleJoke);               //findOneSingleUser
  //app.get("/api/jokes/random",JokeController)
  app.post("/api/jokes/new", JokeController.createNewJoke);                  //createNewUser
  app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);       //updateExistingUser
  app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);  //deleteAnExistingUser
};






