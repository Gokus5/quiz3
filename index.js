let dbuser = [


  {
      username:"harrvvin",
      password:"123456",
      name:"hr",
      email:"harrvvin@utem.edu.my"
  }
  ,
  {
      username:"yuva",
      password:"123789",
      name:"yv",
      email:"yuva@utem.edu.my"
  }
  ,
  {
      username:"ashwini",
      password:"321456",
      name:"ash",
      email:"ashwini@utem.edu.my"
  }
  ]
  
  function login (reqUsername, reqPassword){
      let matchUser = dbuser.find (
          user => user.username == reqUsername
      )
      console.log(matchUser)
  }

  function register (reqUsername,reqPassword,reqName,reqEmail)
  {
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        email: reqEmail

    })

  }

  
//try to login
login("harrvvin","password")
login("utem","password")
  
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)

    let result = login (req.body.username,req.body.password)

    res.send(result)
  })

app.get('/', (req, res) => {
  res.send('Hello Ashwini!')
})

app.get('/bye', (req, res) => {
    res.send('Bye Bye Ashwini!')
  })

  app.post('/register', (req, res) => {
    let result = register (
    req.body.username,
    req.body.password,
    req.body.name,
    req.body.email
    )
    res.send(result)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})