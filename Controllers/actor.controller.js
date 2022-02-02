const express = require("express");
const Actor = require("../Models/acteur.model");

const ActorRouter = express.Router();

// ActorRouter.get("/getAllActors", (req, res, next) => {
//   console.log("Get / Actors");
//   Actor.find((err, actors) => {
//     if (err) {
//       res.status(500).send(err);
//       return;
//     }
//     res.json(actors);
//   });
// });

ActorRouter.route("/Actor")
  .post((req, res) => {
    const { nom, prenom } = req.body;
    const actor = new Actor({
        nom ,
        prenom
    });
    actor.save();
    res.status(201).send(actor);
    console.log(actor);
  })
  .post(function (req, res) {
    Actor.create(req.body, function (err, actor) {
      nom = req.body.nom;
      prenom = req.body.prenom;
    });
    res.status(201).send(actor);
  })
  .get(function (req, res) {
    console.log("GET /actors");

    Actor.find(function (err, actors) {
      if (err) {
        response.status(500).send(error);
        return;
      }

      console.log(actors);
      res.json(actors);
    });
  });

module.exports = ActorRouter;
