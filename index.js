let dbUsers = [


  {
    username: "harrvvin",
    password: "123456",
    name: "hr",
    email: "harrvvin@utem.edu.my"
  }
  ,
  {
    username: "yuva",
    password: "123789",
    name: "yv",
    email: "yuva@utem.edu.my"
  }
  ,
  {
    username: "ashwini",
    password: "321456",
    name: "ash",
    email: "ashwini@utem.edu.my"
  }
]

function login(reqUsername, reqPassword) {
  let matchUser = dbUsers.find(user => user.username == reqUsername)

  //console.log(matchUser)

if(!matchUser) return "User not found!"

if(matchUser.password == reqPassword){
  return matchUser
}else{
  return "Invalid password"
}
}

function register(reqUsername, reqPassword, reqName, reqEmail) {
  dbUsers.push({
    username: reqUsername,
    password: reqPassword,
    name: reqName,
    email: reqEmail

  })

}


//try to login
//login("harrvvin", "password")
//login("utem", "password")


const express = require('express')
const app = express()
const port = 3200

app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body)


  let result = login(req.body.username, req.body.password)
  console.log (result)

  let token = generateToken(result)
  res.send(token)

})

app.get('/hello', (req, res,next) => {
  res.send('Hello!')
})


app.get('/', (req, res) => {
  res.send('Hello Ashwini!')
})

app.get('/bye', (req, res) => {
  res.send('Bye Bye Ashwini!')
})

app.post('/register', (req, res) => {
  let result = register(
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

const jwt = require('jsonwebtoken');
function generateToken(userData) {
  const token = jwt.sign(
    userData,
    'inipassword',
    { expiresIn: 60 }
  );
  return token

}

function verifyToken(){
  let header = req.headers.authorization
  console.log(header)

  let token=header.split(' ')[1]

  jwt.verify(token,'inipassword',function(err,decoded){
  if(err){
    res.send("Invalid Token")
  }
  
  req.user=decoded
  next()
});
}
