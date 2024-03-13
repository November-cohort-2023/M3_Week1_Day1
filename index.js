/* 

    1. to initialize node application: npm init -y

    2. to run our application: node index.js

*/

const colors = require('colors')

const express = require('express')

const logger = require('morgan');


// creating an instance of my express server

const app = express()

app.use(logger('dev'));                               // <== ADD
 
// Make the static files inside of the `public/` folder publicly accessible
app.use(express.static('public'));







let myTeachers = [
    {name:"John", bootcampt:"Web Dev"},
    {name:"Sarah", bootcampt:"Web Dev"},
    {name:"Frank", bootcamp:"Data"}
]



// Our first route:

// app.get() takes two arguements:
//  1. the endpoint where we expect the request
//  2. function that runs when we get the request


console.log("TESTING".green)


app.get('/ironhack',(request,response)=>{
    console.log("In Home Route")

    response.json({name:"Marta"})
})


app.get('/teacher-info',(request,response)=>{
    response.json(myTeachers)
})


let students = [
    {
      "id": 1,
      "name": "Achraf",
      "country": "Barcelona"
    },
    {
      "id": 2,
      "name": "Christian",
      "country": "Germany"
    },
    {
      "id": 3,
      "name": "Diogo",
      "country": "Portugal"
    },
    {
      "id": 4,
      "name": "Eduardo",
      "country": "Portugal"
    },
    {
      "id": 5,
      "name": "Ioannis",
      "country": "Germany"
    },
    {
      "id": 6,
      "name": "Irene",
      "country": "Netherlands"
    },
    {
      "id": 7,
      "name": "Jorge",
      "country": "Germany"
    },
    {
      "id": 8,
      "name": "Juan",
      "country": "Spain"
    },
    {
      "id": 9,
      "name": "Marta",
      "country": "France"
    },
    {
      "id": 10,
      "name": "Mohammad",
      "country": "Germany"
    },
    {
      "id": 11,
      "name": "Monica",
      "country": "Portugal"
    },
    {
      "id": 12,
      "name": "Nadine",
      "country": "Germany"
    },
    {
      "id": 13,
      "name": "Natalia",
      "country": "Spain"
    },
    {
      "id": 14,
      "name": "Eleanor",
      "country": "Spain"
    }
  ]


  app.get('/students',(request,response)=>{
    response.json(students)
  })

  console.log(__dirname)

  app.get('/homepage',(request,response)=>{
    response.sendFile(__dirname + '/homepage.html')
  })
/* 
Exercise 1:

    1. Create a new route at the end point /students

    2. when a request is sent into this route then a response should be sent back that is all the students

   
*/



// Have my application await requests

app.listen(5005)