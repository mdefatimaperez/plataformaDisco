const express = require('express')
const Album = require('../models/album.js')
const User = require('../models/user.js')

//UNA INSTANCIA PARA MANEJAR RUTAS
const router = express.Router()
//archivos con rutas
const albums = require('./album.js')
const users = require('./user.js')

//router.use 
router.use('/album', albums)
router.use('/user', users)

 module.exports = router