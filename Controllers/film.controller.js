const film = require('../models/film.model');
const filmController = {};


// Create a new film
filmController.createFilm = async function (req, res) {
    const newFilm = new film({
        titre: req.body.titre,
        annee: req.body.annee,
        realisateur: req.body.realisateur,
        acteurs: req.body.acteurs,
    });
    try {
        await newFilm.save();
        res.status(201).json({
        message: "Film created successfully",
        newFilm,
        });
    } catch (error) {
        res.status(500).json({
        message: "Error occured while creating film",
        error,
        });
    }
    }

// Get all films
filmController.getAllFilms = async function (req, res) {
    console.log("GET /films");
    let films;
    try {
        films = await film.find().populate('Actors');
        res.send(films);
    } catch (error) {
        res.status(500).send(error);
    }
    }


module.exports = filmController;
