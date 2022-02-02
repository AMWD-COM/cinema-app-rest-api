const Actor = require("../Models/acteur.model");
const actorsController = {};
actorsController.createActor = (req, res) => {
  const { nom, prenom } = req.body;
  const actor = new Actor({
    nom,
    prenom,
  });
  actor.save();
  res.status(201).send(actor);
  console.log(actor);
};

actorsController.getAllActors = function (req, res) {
  console.log("GET /actors");

  Actor.find(function (err, actors) {
    if (err) {
      response.status(500).send(error);
      return;
    }

    console.log(actors);
    res.json(actors);
  });
};

module.exports = actorsController;
