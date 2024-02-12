const songController=require('../controller/controller');
const router=require('express').Router();
//crete a new song route
router.post('/songs', songController.createSong);
// Get all songs
router.get('/songs', songController.getAllSongs);

// Update a song
router.put('/songs/:id', songController.updateSong);

// Delete a song
router.delete('/songs/:id', songController.deleteSong);

// Get overall statistics
router.get('/statistics', songController.getStatistics);
module.exports=router