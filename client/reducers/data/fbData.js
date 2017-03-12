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
  start_time: moment("2017-10-20 20:30", "x"), //date needs to match "date" and "targetTime" props
  //not from FB but we need:
  date: moment("2017-10-20", "YYYY[-]MM[-]D"), //date needs to match "date" and "targetTime" props
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

const secondEvent = {
  attending_count: 353,
  cover: {
    source: "imageSourceUrl"
  },
  description: "Concert for artist ABC!",
  name: "Quidditch World Cup",
  place: {
    name: "AT&T Park",
    location: {
      latitude: 37.7780122,
      longitude: -122.4172768,
      city: "San Francisco",
      country: "USA",
      name: "AT&T Park",
      street: "24 Willie Mays Plaza",
      zip: "94107"
    }
  },
  start_time: moment("2017-06-06 18:30", "x"), //date needs to match "date" and "targetTime" props
  //not from FB but we need:
  date: moment("2017-06-06", "YYYY[-]MM[-]D"), //date needs to match "date" and "targetTime" props
  eventType: "event",
  friendsAttending: [
    {name: "Oliver Wood", imgSrc: "pictureURL"},
    {name: "Charlie Weasley", imgSrc: "pictureURL"},
    {name: "James Potter", imgSrc: "pictureURL"},
    {name: "Viktor Krum", imgSrc: "pictureURL"},
  ],
  targetTime: moment("2017-03-20 6:30", "x"), //date needs to match "date" and "targetTime" props
  searchRadius: 1, //search radius for OT, in miles. needs to be int
}

const thirdEvent = {
  attending_count: 353,
  cover: {
    source: "imageSourceUrl"
  },
  description: "O.W.L.S Test of Witchcraft and Wizardry",
  name: "O.W.L.S Test of Witchcraft and Wizardry",
  place: {
    name: "MakerSquare",
    location: {
      latitude: 37.7780122,
      longitude: -122.4172768,
      city: "San Francisco",
      country: "USA",
      name: "MakerSquare",
      street: "611 Mission Street",
      zip: "94105"
    }
  },
  start_time: moment("2017-03-13 9:30", "x"), //date needs to match "date" and "targetTime" props
  //not from FB but we need:
  date: moment("2017-03-03", "YYYY[-]MM[-]D"), //date needs to match "date" and "targetTime" props
  eventType: "event",
  friendsAttending: [
    {name: "Neville Longbottom", imgSrc: "pictureURL"},
    {name: "Susan Bones", imgSrc: "pictureURL"},
    {name: "Pansy Parkinson", imgSrc: "pictureURL"},
    {name: "Cho Chang", imgSrc: "pictureURL"},
  ],
  targetTime: moment("2017-03-20 6:30", "x"), //date needs to match "date" and "targetTime" props
  searchRadius: 1, //search radius for OT, in miles. needs to be int
}

const fourthEvent = {
  attending_count: 353,
  cover: {
    source: "imageSourceUrl"
  },
  description: "Football Game",
  name: "Rosebowl 2018",
  place: {
    name: "Levi's Stadium",
    location: {
      latitude: 37.7780122,
      longitude: -122.4172768,
      city: "Santa Clara",
      country: "USA",
      name: "Levi's Stadium",
      street: "4900 Marie P DeBartolo Way",
      zip: "95054"
    }
  },
  start_time: moment("2017-12-31 15:30", "x"), //date needs to match "date" and "targetTime" props
  //not from FB but we need:
  date: moment("2017-12-31", "YYYY[-]MM[-]D"), //date needs to match "date" and "targetTime" props
  eventType: "event",
  friendsAttending: [
    {name: "Neville Longbottom", imgSrc: "pictureURL"},
    {name: "Susan Bones", imgSrc: "pictureURL"},
    {name: "Pansy Parkinson", imgSrc: "pictureURL"},
    {name: "Cho Chang", imgSrc: "pictureURL"},
  ],
  targetTime: moment("2017-03-20 6:30", "x"), //date needs to match "date" and "targetTime" props
  searchRadius: 1, //search radius for OT, in miles. needs to be int
}

const fifthEvent = {
  attending_count: 353,
  cover: {
    source: "imageSourceUrl"
  },
  description: "Football Game",
  name: "Annual Rib Street Fair",
  place: {
    name: "Union Square",
    location: {
      latitude: 37.7780122,
      longitude: -122.4172768,
      city: "San Francisco",
      country: "USA",
      name: "Union Square",
      street: "Geary and Powell",
      zip: "94101"
    }
  },
  start_time: moment("2017-8-31 10:30", "x"), //date needs to match "date" and "targetTime" props
  //not from FB but we need:
  date: moment("2017-8-31", "YYYY[-]MM[-]D"), //date needs to match "date" and "targetTime" props
  eventType: "event",
  friendsAttending: [
    {name: "Neville Longbottom", imgSrc: "pictureURL"},
    {name: "Susan Bones", imgSrc: "pictureURL"},
    {name: "Pansy Parkinson", imgSrc: "pictureURL"},
    {name: "Cho Chang", imgSrc: "pictureURL"},
  ],
  targetTime: moment("2017-03-20 6:30", "x"), //date needs to match "date" and "targetTime" props
  searchRadius: 1, //search radius for OT, in miles. needs to be int
}

//LIFE EVENT EXAMPLE
//based off of https://developers.facebook.com/docs/graph-api/reference/life-event/
//heavily stripped of everything we don't need
const CollegeAnniversary = {
  id: 12,
  start_time: moment("2017-05-03", "x"),
  //not from FB but we need:
  name: "Anniversary of College Graduation",
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
  secondEvent,
  thirdEvent,
  fourthEvent,
  fifthEvent,
  friendBirthdayParty,
  CollegeAnniversary
]
