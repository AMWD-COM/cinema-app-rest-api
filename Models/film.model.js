const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    titre: String,
    annee: Number,
    realisateur: String,
    acteurs: [ {type: mongoose.Schema.Types.ObjectId,ref:'Actors'}],
    
});




const Film = mongoose.model('Film', filmSchema);
module.exports = Film;