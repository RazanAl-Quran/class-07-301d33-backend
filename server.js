'use strict';

// make a variable to use the express library
const express = require('express');

// serevr has all the properities and methods in express
const server = express();

const pokeData = require('./assets/poke.json')

const PORT = 3001;

// localhost:3005/
server.get('/',(req,res)=>{
    res.status(200).send('home route')
})

// localhost:3005/test
server.get('/test',(request,response)=>{
    response.send('api server is working')
})

// localhost:3005/getPokemon?pokeName=charmander&pokeLevel=10
server.get('/getPokemon',(req,res)=>{
    // res.send(pokeData);

    let pokemonName = req.query.pokeName;
    console.log(req.query);
    console.log(req.query.pokeName)
    let pokeInfo = pokeData.results.find((item)=>{
        if(item.name === pokemonName) {
            return item
        }
        
    })
    console.log('pokeInfo',pokeInfo)
    res.send(pokeInfo)

})

// localhost:3005/ANYTHING
server.get('*',(req,res)=>{
    res.status(404).send('route is not found')
})

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})