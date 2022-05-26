const { get } = require('http');
const express = require('express') 
const Contenedor = require('./container.js')
 const container = new Contenedor('./file2.json')


 const app = express()
  app.get('/',(req,res) =>{res.send(' yooo')})

  app.get('/api/productos',(req,res) =>{
      res.json(container)
    }),

 
  app.listen(8080)

container.save({
    id: 1,
    name: 'batman',
    lastname: 'DeLaCalle',
    age: 'unknown',
    Wanted: 'si',
    price: 2
},
)
container.save({
    id: 2,
     name: 'Robin',
    lastname: 'DeLaCalle',
     age: 'unknown',
     Wanted: 'si',
     price: 4
    }    
)
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
