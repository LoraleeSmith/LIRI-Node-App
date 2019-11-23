require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

node liri.js concert - this < "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp" >

    node liri.js spotify - this - song < "https://rest.spotify.com/song" + title + "/app_id=d1692f05e78349748043632bf1011d6f" >


        node liri.js movie - this < "https://rest.omdb.com/movie" + title + "app_id=trilogy" >


            node liri.js do -what - it - says