// How Create Relationships with Mongoose and Node.js ?
// Basically is saved the _id from one collection to another collection
//  ( {type: mongoose.Schema.Types.ObjectId,ref:'NameOfSchema'}).
// Where the data related it select with the populate() method.

// populate() method is used to populate the data from one collection to another collection.
// exemple: 
// const Actor = require("../Models/acteur.model");
// const Film = require("../Models/film.model");
//
// Actor.findOne({guid:1}).populate('films').exec(function(err,actor){
//   if(err){
//     console.log(err);
//   }
//   console.log(actor);
// });
//
// Film.findOne({guid:1}).populate('actors').exec(function(err,film){
//   if(err){
//     console.log(err);
//   }
//   console.log(film);
// });
//
//
//
// exec (callback) : this methode is used to execute the query.
//
// exec(function(err,docs){
//   if(err){
//     console.log(err);
//   }
//   console.log(docs);
// });
//
