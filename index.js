// LLAMAR A EXPRESS (DEPENDENCIA)
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/index.js')
const albums = require('./models/album.js')
const users = require('./models/user.js')


const url = "mongodb+srv://admin:carlos2020@cluster0.fvaat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const app = express()
//EL ORGANIZADOR DE LA DATA
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // vuelve la data un formato que se pueda comprender

//si alguien ingresa se lo manda a:
const path = require("path");
app.use(express.static(path.join(__dirname, "./public"))); 

//EL ORGANIZADOR DE LAS RUTAS
app.use('/', router)

const connectToMongo = async ()=>{
  try{
   await mongoose.connect(url)
   //FUNCION PARA LEVANTAR NUESTRO SERVIDOR
    app.listen(3000, () => {
      console.log("Servidor escuchando en puerto 3000 y DB conectada");
    });

  }catch(error){
    //SI FALLA CAE ACA
    console.log(error)
  }  
}

connectToMongo()



