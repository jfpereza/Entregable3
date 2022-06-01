const { get } = require('http');
const express = require('express') 
const Contenedor = require('./container.js');
const fs = require('fs');

const dbfile = './products.json'
const PORT = process.env.PORT || 8080
 const container = new Contenedor(dbfile)
 const app = express()
 

   app.get('/',(req,res) =>{res.send(' yooo')}) //http://localhost:8080/

  app.get('/api/products',(req,res) =>{
      const data = JSON.parse(fs.readFileSync(dbfile,'utf-8'))
      res.json(data)    
    })

  app.get('/api/proRandom',(req,res) =>{
      const data = JSON.parse(fs.readFileSync(dbfile,'utf-8'))
      const item = data[Math.floor(Math.random()* data.length)]
      res.json(item)    
    })

    app.listen(PORT, console.log(PORT,'listening'))

// container.save({
//     id: 1,
//     name: 'batman',
//     lastname: 'DeLaCalle',
//     age: 'unknown',
//     Wanted: 'si',
//     price: 2
// },
// )
// container.save({
//     id: 2,
//      name: 'Robin',
//     lastname: 'DeLaCalle',
//      age: 'unknown',
//      Wanted: 'si',
//      price: 4
//     }    
// )
// console.log(container.getByID(2))
//por consola(getByID) tendre id 2
// 

  

// { id: 2,
//     name: 'Robin',
//     lastname: 'DeLaCalle',
//     age: 'unknown',
//     Wanted: 'si',
//     price: 4},

// { id: 3,
//     name: 'cap.America',
//     lastname: 'DeLaCalle',
//     age: 'unknown',
//     Wanted: 'si',
//     price: 6}
// https://glitch.com/edit/#!/orange-quickest-title