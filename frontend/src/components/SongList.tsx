import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongs } from './songsSlice';

const SongList = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.items);

  useEffect(() => {
    dispatch(fetchSongs());
  }, []);

  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
          {song.title} - {song.artist}
        </li>
      ))}
    </ul>
  );
};

export default SongList;