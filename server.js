const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const api = require('./api')
const baseURL = "https://superheroapi.com/api/"
const APIkey = "3007889659253910"





if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }



app.get('/api/choose/:name', (req, res) => {
    const name = req.params.name
    api.make_API_call(baseURL + APIkey + "/search/" + name)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.get('/api/fight/:id', (req, res) => {
    const id = req.params.id
    console.log(baseURL + APIkey + "/" + id )
    api.make_API_call(baseURL + APIkey + "/" + id)
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})




app.listen(PORT, () => console.log(`App listening on PORT ${PORT}!`))