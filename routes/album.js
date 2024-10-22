const express = require('express');
const router = express.Router();
const Album = require('../models/album');

// ALBUM

// Agregar un album
router.post('/', async (req, res) => {
    try {
      const newAlbum = new Album(req.body);
      await newAlbum.save();
      res.status(201).json(newAlbum);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Editar un album
  router.put('/:id', async (req, res) => {
    try {
      const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedAlbum) {
        return res.status(404).json({ error: 'Album no encontrado' });
      }
      res.json(updatedAlbum);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Agregar o eliminar una canción del album
  router.patch('/:id/songs', async (req, res) => {
    try {
      const album = await Album.findById(req.params.id);
      if (!album) {
        return res.status(404).json({ error: 'Album no encontrado' });
      }
  
      // Agregar o eliminar canciones dependiendo del request bodyS
      if (req.body.add) {
        album.songs.push(req.body.add);
      } else if (req.body.remove) {
        album.songs = album.songs.filter(song => song !== req.body.remove);
      }
  
      await album.save();
      res.json(album);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Obtener todos los albums
  router.get('/', async (req, res) => {
    try {
      const albums = await Album.find();
      res.json(albums);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Obtener un album específico
  router.get('/:id', async (req, res) => {
    try {
      const album = await Album.findById(req.params.id);
      if (!album) {
        return res.status(404).json({ error: 'Album no encontrado' });
      }
      res.json(album);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Eliminar un album
  router.delete('/:id', async (req, res) => {
    try {
      const deletedAlbum = await Album.findByIdAndDelete(req.params.id);
      if (!deletedAlbum) {
        return res.status(404).json({ error: 'Album no encontrado' });
      }
      res.json({ message: 'Album eliminado correctamente' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  module.exports = router;