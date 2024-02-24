const Song=require('../model/model')
const songController = {
    // Create a new song
    createSong: async (req, res) => {
      try {
        // console.log('here')
        const song = new Song(req.body);
       
        console.log(song,'from song')
        await song.save();
        // if (song.title.length>1) {
        //   return res.status(400).send('this song already exists');
        // }
        res.status(201).json({ message: 'Song created successfully',
         song: song});
      } catch (error) {
        res.status(400).send(error);
      }
    },
  
    // Get all songs
    getAllSongs: async (req, res) => {
      try {
        const songs = await Song.find();
        res.status(200).send(songs);
      } catch (error) {
        res.status(500).send(error);
      }
    },
  
    // Update a song
    updateSong: async (req, res) => {
      try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!song) {
          return res.status(404).send();
        }
        else{ res.status(200).send(song);
          console.log(song)
      }
      } catch (error) {
        res.status(400).send(error);
      }
    },
  
    // Delete a song
    deleteSong: async (req, res) => {
      try {
        const song = await Song.findByIdAndDelete(req.params.id);
        if (!song) {
          return res.status(404).send();
        }
        res.status(200).send(song);
      } catch (error) {
        res.status(500).send(error);
      }
    },
    //get total stastics
    getStatistics: async (req, res) => {
      try {
        const totalSongs = await Song.countDocuments();
        const uniqueArtists = await Song.distinct('artist').count();
        const uniqueAlbums = await Song.distinct('album').count();
        const uniqueGenres = await Song.distinct('genre').count();
        res.status(200).json({
          totalSongs,
          uniqueArtists,
          uniqueAlbums,
          uniqueGenres,
        });
      } catch (error) {
        res.status(500).send(error);
      }
    },
  };
  module.exports=songController