import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong, updateSong } from './songsSlice';

const SongForm = ({ song }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(song?.title || '');
  const [artist, setArtist] = useState(song?.artist || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (song) {
      dispatch(updateSong({ id: song.id, title, artist }));
    } else {
      dispatch(addSong({ title, artist }));
    }
    // Reset form
    setTitle('');
    setArtist('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist" />
      <button type="submit">{song ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default SongForm;