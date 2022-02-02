const Actor = require("../Models/acteur.model");
const actorsController = {};
actorsController.createActor = (req, res) => {
  try {
    const newActor = new Actor(req.body);
    newActor.save();
    res.send(newActor);
  } catch (error) {
    res.status(500).send(error);
  }
};

actorsController.getAllActors = async function (req, res) {
  console.log("GET /actors");
  let actors;
  try {
    actors = await Actor.find();
    res.send(actors);
  } catch (error) {
    res.status(500).send(error);
  }
};

actorsController.getSingleActor = async function (req, res) {
  console.log("GET /actors/:id");
  let actor;
  try {
    actor = await Actor.findById(req.params.id);
    res.send(actor);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = actorsController;
