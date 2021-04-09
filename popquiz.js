const schema = buildSchema(`
type Monster {
  name: String
  power: String
  totalKills: Int
  species: String 
}

type City {
  name: String! 
  state: String
  mayor: String! 
  population: Int!
}

type Battle {
  monsterOne: String! 
  monsterTwo: String!
  city: String! 
}

type Query {
  getBattle: Battle
}

Write a query that summons Godzilla and Mothra to battle in tokyo
getBattle

print the a monsters name, and power
print a city's name and population

type Card {
  suite: String!
  color: String!
  number: Int!
}
Hand type for a hand of cards
type Hand {
  cards: [String]
  numCards: Int! 
  turn: Boolean
}
Query type that returns a hand of cards

Write a query that gets a hand of cards

print the value and suit of each card
Image type should know the url and size an image

Location type needs latitude and longitude

Image type should include a location

type User {
  dealer: Boolean
  name: String
  images: [String!]
}

Query type that returns a User

Write a query that gets users images

Display the user name
Display the image url
`)