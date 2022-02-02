const Actor = require("../Models/acteur.model");
const actorsController = {};


actorsController.createActor = async function (req, res) {
  const actor = new Actor({
    nom: req.body.nom,
    prenom: req.body.prenom, 
  });
  try {
    await actor.save();
    res.status(201).json({
      message: "Actor created successfully",
      actor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating actor",
      error,
    });
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
