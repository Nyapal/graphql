// Dependancies
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()
const port = 4000

// Create A Schema 
const schema = buildSchema(`
type About {
  message: String!
}
type Query {
  getAbout: About
    getJob(level: String!): Job
      getMeal(time: String!): Meal
}
type Job {
  title: String!
  salary: Int 
  skills: [String]
}
type Skill {
  name: String!
  description: String! 
  yrsOfExperience: Float!
}
type Meal {
  description: String! 
}
`)

// Define A Resolver 
const root = {
  getAbout: () => {
    return { message: 'Hello World'}
  },
    getJob: ({ level }) => {
      const jobs = {title: 'Software Developer Intern', title: 'Software Developer', title: 'Curriculum Developer'}
      const salary = null
      const skills = null
      return { title: "Teacher",  salary: 50000, skills: ["Communication", "Math", "Reading"]}
    },
      getMeal: ({ time }) => {
        const allMeals = { breakfast: 'toast', lunch: 'noodles', dinner: 'pizza'}
        const Meal: allMeals[time]
        return { description: Meal}
      }
}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Running on port: ${port}`)
})
