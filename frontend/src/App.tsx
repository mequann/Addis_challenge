import React from 'react';
import SongList from './components/SongList';

import Statistics from './components/Statistics';
import AddSongForm from './components/AddSongForm';

const App = () => {
  return (
    <div>
      <h1>Song App</h1>
      <SongList />
      <Statistics />
      <AddSongForm />
    </div>
  );
};

export default App;