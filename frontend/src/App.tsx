import React from 'react';
import SongList from './components/SongList';

import Statistics from './components/Statistics';
import AddSongForm from './components/AddSongForm';
import Home from './components/Home';
import { Route, Router, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Song App</h1>
      <Home/>
      {/* <Router> */}
        <Routes>
<Route path='/song-list' element={<SongList />}/>
<Route path='/add-song' element={<AddSongForm />}/>
<Route path='/update-song' element={<Statistics />}/>
        </Routes>
      
   
    
      {/* </Router> */}
     
    </div>
  );
};

export default App;