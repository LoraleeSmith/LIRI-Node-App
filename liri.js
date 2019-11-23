require("dotenv").config();
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

node liri.js  concert - this < artist / band name >
    node liri.js  spotify - this < song >
        node liri.js  movie - this < title >
            node liri.js  do - this < whatever told >
