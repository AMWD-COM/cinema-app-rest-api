const Actor = require("../Models/acteur.model");
const actorsController = {};

actorsController.createActor = async function (req, res) {
  const actor = new Actor({
    guid: req.body.guid,
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
  let actors;
  try {
    actors = await Actor.find();
    res.send(actors);
  } catch (error) {
    res.status(500).send(error);
  }
};

actorsController.getSingleActor = async function (req, res) {
  console.log("GET /actors/:guid");
  let actor;
  try {
    actor = await Actor.findOne({ guid: req.params.guid});
    if (actor) {
      res.send(actor);
    } else {
      res.status(404).send("Actor not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};


actorsController.updateActor = async function (req, res) {
  console.log("PUT /actors/:guid");
  let actor;
  try {
    actor = await Actor.findByIdAndUpdate(
      { id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    if (actor) { 
      res.send(actor);
    } else {
      res.status(404).send("Actor not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}

actorsController.deleteActor = async function (req, res) {
  console.log("DELETE /actors/:guid");
  let actor;
  try {
    actor = await Actor.findOneAndDelete({ guid: req.params.guid });
    if (actor) {
      res.status(200).send("Actor deleted successfully");
    } else {
      res.status(404).send("Actor not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
}






module.exports = actorsController;
