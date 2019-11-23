var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: <d1692f05e78349748043632bf1011d6f>,
  secret: <5f482a87b4fa476b90f9614128c63d09>
            });

            search: function({type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

spotify.search({type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
                  }
                 
                console.log(data); 
                });

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
                  id: <d1692f05e78349748043632bf1011d6f>,
                  secret: <5f482a87b4fa476b90f9614128c63d09>
                });
                 
                spotify
                  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
                  .then(function(data) {
                    console.log(data); 
                  })
                  .catch(function(err) {
                    console.error('Error occurred: ' + err); 
                  });
$ npm install axios
const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
 
// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
 
// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
http://www.omdbapi.com/?apikey=[yourkey]&