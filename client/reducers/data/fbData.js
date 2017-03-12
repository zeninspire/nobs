import moment from 'moment'

//EVENT EXAMPLE
//based off of https://developers.facebook.com/docs/graph-api/reference/event/
//heavily stripped of everything we don't need
const concertEvent = {
  attending_count: 353,
  cover: {
    source: "imageSourceUrl"
  },
  description: "Concert for artist ABC!",
  name: "ABC World Tour - San Francisco",
  place: {
    name: "Bill Graham Center",
    location: {
      latitude: 37.7780122,
      longitude: -122.4172768,
      city: "San Francisco",
      country: "USA",
      name: "Bill Graham Center",
      street: "99 Grove St",
      zip: "94102"
    }
  },
  start_time: moment("2017-03-20 8:30", "x"), //date needs to match "date" and "targetTime" props


  //not from FB but we need:
  date: moment("2017-03-20", "YYYY[-]MM[-]D"), //date needs to match "date" and "targetTime" props
  eventType: "event",
  friendsAttending: [
    {name: "Bob Liu", imgSrc: "pictureURL"},
    {name: "Charles Liu", imgSrc: "pictureURL"},
    {name: "Celine Liu", imgSrc: "pictureURL"},
    {name: "Danny Liu", imgSrc: "pictureURL"},
    {name: "Erik Liu", imgSrc: "pictureURL"},
  ],
  targetTime: moment("2017-03-20 6:30", "x"), //date needs to match "date" and "targetTime" props
  searchRadius: 1, //search radius for OT, in miles. needs to be int
}

const friendBirthdayParty = {
  attending_count: 22,
  cover: {
    source: "imageSourceUrl"
  },
  description: "John's birthday bash!",
  name: "John's 25th Birthday Bash",
  place: {
    name: "John's place",
    location: {
      latitude: 37.7817644,
      longitude: -122.3912981,
      city: "San Francisco",
      country: "USA",
      name: "Github HQ",
      street: "88 Colin P Kelly Jr St",
      zip: "94107"
    }
  },
  start_time: moment("2017-05-21 10:30", "x"), //date needs to match "date" and "targetTime" props


  //not from FB but we need:
  date: moment("2017-05-21", "YYYY[-]MM[-]D"), //date needs to match "date" and "targetTime" props
  eventType: "event",
  friendsAttending: [
    {name: "Bob Liu", imgSrc: "pictureURL"},
    {name: "Charles Liu", imgSrc: "pictureURL"},
    {name: "Celine Liu", imgSrc: "pictureURL"},
    {name: "Danny Liu", imgSrc: "pictureURL"},
    {name: "Erik Liu", imgSrc: "pictureURL"},
  ],
  targetTime: moment("2017-05-21 6:30", "x"), //date needs to match "date" and "targetTime" props
  searchRadius: 1, //search radius for OT, in miles. needs to be int
}


//LIFE EVENT EXAMPLE
//based off of https://developers.facebook.com/docs/graph-api/reference/life-event/
//heavily stripped of everything we don't need
const anniversary = {
  id: 12,
  start_time: moment("2017-05-03", "x"),
  

  //not from FB but we need:
  name: "Anniversary",
  date: moment("2017-05-03", "YYYY[-]MM[-]D"),
  imgSrc: "pictureURL", //img of couple?
  location: {
    latitude: 37.7780122,
    longitude: -122.4172768,
  },
  searchRadius: 3,
}



module.exports = [
  concertEvent,
  friendBirthdayParty,
  anniversary
]
