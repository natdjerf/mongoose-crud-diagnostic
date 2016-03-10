"use strict";
////////////////////////
///  Art Movements   ///
////////////////////////

// Your team has been tasked with making an educational app for
// a museums's website. When a user clicks on a particular piece of art,
// they'll be able to see the movement that piece was part of, as well as
// a list of other related movements.

// Your job is to build the piece of the system for doing CRUD on the different
// art movements; the API for this part of the system must be standardized so
// so that other parts of the application can use it.

// Each Movement needs to have the following features:
// - A name (required).
// - A description (no longer than 200 characters).
// - Starting and ending years (as strings) for the time when the movement
//    was most prominent.
// - An 'ancestor', another art movement that this movement descends from.

// Please implement the CRUD functions below, using Promises to handle the
//  specified success and failure behaviors.
// Your Mongoose model should go in a separate file, in the `models` directory.

/// STARTER CODE - DO NOT ALTER!
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mongoose-crud');

/// ADD YOUR CODE BELOW

const create = (name, description, startYear, endYear) => {};
// Success -> Print new Movement as JSON
// Failure -> Console.error

const index = () => {};
// Success -> Print all Movements as JSON
// Failure -> Console.error

const show = (id) => {};
// Success -> Print specified Movement as JSON
// Failure -> Console.error

const update = (id, field, value) => {};
// Success -> Print updated Movement as JSON
// Failure -> Console.error

const destroy = (id) => {};
// Success -> Print 'removed'
// Failure -> Console.error

module.exports = {
  create,
  index,
  show,
  update,
  destroy
}
