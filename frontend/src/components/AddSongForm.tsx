// import React, { useRef } from 'react'
// import { useAppDispatch } from '../store/store'

// const addSong = () => {
//     const title = useRef<string>('')
// const artist = useRef<string>('')
// const album = useRef<string>('')
// const genre = useRef<string>('')
// // const song=useRef<[]>([])
//   return (
//     <div>
//         <form onSubmit={()=>useAppDispatch(addSong())}>
//             <label htmlFor="title">Title</label>

//             <input type="text" id="title" name="title" 
//             onChange={(e)=>title.current=e.target.value}
//             />
//             <label htmlFor="artist">Artist</label>
//             <input type="text"  id='artist' name='artist'
//             onChange={e=>artist.current=e.target.value}/>
//             <label htmlFor="album">Album</label>
//             <input type="text"  id='album' name='album'
//             onChange={(e)=>(album.current=e.target.value)}
//             />
//             <label htmlFor="genre">Genre</label>
//             <input type="text"  id='genre' name='genre'
//             onChange={(e)=>(genre.current=e.target.value)}
            
//             />
//                <button >Add</button>
//         </form>
     
//     </div>
//   )
// }

// export default addSong
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector }from '../store/store';
import { addSong } from '../store/features/songSlice';
import styled from '@emotion/styled';
import { Song} from '../store/features/songSlice';

// ... (styles and interface)
// interface FormData {
//   id: '';
//   title: string;
//   artist: string;
//   album: string;
//   genre: string;
// }

const AddSongForm = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Song>({
    id:'',
    title: '',
    artist: '',
    album: '',
    genre: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  dispatch(addSong(formData))
    setFormData({
      id:'',
      title: '',
      artist: '',
      album: '',
      genre: '',
    });
  };
  const FormContainer = styled.div`
  width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormLabel = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
  display: block;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const FormButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

  return (
    <FormContainer>
      <h2>Add New Song</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <FormLabel>Title:</FormLabel>
          <FormInput
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel>Artist:</FormLabel>
          <FormInput
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel>Album:</FormLabel>
          <FormInput
            type="text"
            name="album"
            value={formData.album}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel>Genre:</FormLabel>
          <FormInput
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
          />
        </div>
        <FormButton type="submit">Add Song</FormButton>
      </form>
    </FormContainer>
  );
};

export default AddSongForm;