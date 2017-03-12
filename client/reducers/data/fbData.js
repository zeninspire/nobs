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
  name: "Lee Jordan World Tour - San Francisco",
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
    {name: "Harry Potter", imgSrc: "pictureURL"},
    {name: "Hermione Granger", imgSrc: "pictureURL"},
    {name: "Ronald Weasley", imgSrc: "pictureURL"},
    {name: "Fred Weasley", imgSrc: "pictureURL"},
    {name: "George Weasley", imgSrc: "pictureURL"},
  ],
  targetTime: moment("2017-03-20 6:30", "x"), //date needs to match "date" and "targetTime" props
  searchRadius: 1, //search radius for OT, in miles. needs to be int
}

const friendBirthdayParty = {
  attending_count: 22,
  cover: {
    source: "imageSourceUrl"
  },
  description: "Harry's birthday bash!",
  name: "Harry's 37th Birthday Bash",
  place: {
    name: "The Leaky Cauldron",
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
  start_time: moment("2017-07-31 10:30", "x"), //date needs to match "date" and "targetTime" props
  //not from FB but we need:
  date: moment("2017-07-31", "YYYY[-]MM[-]D"), //date needs to match "date" and "targetTime" props
  eventType: "event",
  friendsAttending: [
    {name: "Virginia Potter", imgSrc: "pictureURL"},
    {name: "Albus Potter", imgSrc: "pictureURL"},
    {name: "Lily Potter", imgSrc: "pictureURL"},
    {name: "James Potter", imgSrc: "pictureURL"},
    {name: "Joanne Rowling", imgSrc: "pictureURL"},
  ],
  targetTime: moment("2017-07-31 6:30", "x"), //date needs to match "date" and "targetTime" props
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
