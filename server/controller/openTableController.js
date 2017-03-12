var request = require('superagent');
var _ = require('lodash')

var credentials = require('../credentials');


//Assumes the following query:
// start_date_time: 2017-03-29T18%3A00
// party_size: 2 
// forward_minutes: 120 (must be increments of 30)
// backward_minutes: 30
// longitude: -122.4172768
// latitude: 37.7780122
// radius: 1 (must be int, in miles)
// include_unavailable: false

//returns an array of restaurants
var openTableController = function(req, res) {
  var query = req.query;

  var otQueryString = ""

  var data = {};
  request
    .get('https://platform.otqa.com/availability')
    .query({
      start_date_time: query.start_date_time,
      party_size: query.party_size,
      forward_minutes: query.forward_minutes || 120, 
      backward_minutes: query.backward_minutes || 30, 
      longitude: query.longitude,
      latitude: query.latitude,
      radius: query.radius,
      include_unavailable: query.include_unavailable || false

    })
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer 27037c67-f394-4cfd-ab51-069ac71132fb')
    .end(function (err, otRes) {
      if (err) {
        res.send(err)
      } else {
        var parsedOtRes = JSON.parse(otRes.text)
        var availabilities = parsedOtRes.availabilities ?  parsedOtRes.availabilities.slice(0,3) : []//array of restaurants

        //2, 4, 10, 12 available on dev account
        var seq = [
          getRestaurantData(2),
          getRestaurantData(4),
          getRestaurantData(10)
        ]

        Promise.all(seq)
          .then((allRes) => {
            var formattedRes = _.map(allRes, (restaurantData, index) => {
              var restDetails = JSON.parse(restaurantData.text).items[0];
              restDetails.availabilities = availabilities[index]
              return restDetails;
            })

            res.send(formattedRes);
          })

      }
    })

}


var getRestaurantData = function(id) {
  return new Promise((resolve, reject)=> {
      request
        .get('https://platform.otqa.com/sync/listings/' + id)
        .set('Content-Type', 'application/json')
        .set('Authorization', 'Bearer 27037c67-f394-4cfd-ab51-069ac71132fb')
        .end(function(err, res) {
          if (err) {
            reject(err)
          } else {
            resolve(res);
          } 
        })
  })
}


module.exports = openTableController;
