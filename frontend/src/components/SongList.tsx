/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import React, { useEffect, useState,ChangeEvent, FormEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getsongsfetch,deleteSong, updateSong } from '../store/features/songSlice';
import { useAppSelector, useAppDispatch } from './../store/store';
// import AddSongForm from './AddSongForm';
// import { PayloadAction } from '@reduxjs/toolkit';


const StyledContainer = styled.div`
  margin: 20px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const StyledTh = styled.th`
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const StyledTd = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const StyledButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 4px;
  margin-right: 12px;
`;
const DeleteButton = styled(StyledButton)`
  background-color: #ff5733;
  color: white;
`;

const UpdateButton = styled(StyledButton)`
  background-color: #4285f4;
  color: white;
`;
//for update section
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
  import { Song } from "../store/features/songSlice";
  import { addSong } from "../store/features/songSlice";
  // import React, { useState, ChangeEvent, FormEvent } from "react";

const SongList = () => {
  const dispatch = useAppDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState<string | null>(null);
  const songs = useAppSelector((state) => {
    // console.log('Current Songs State:', state.songs.songs);
    return state.songs.songs;
  })
  const [formData, setFormData] = useState<Song>({
    _id: "",
    title: "",
    artist: "",
    album: "",
    genre: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // console.log(songs)
  // const [deleteId, setDeleteId] = useState<string>();
  // console.log(songs)
  // const Navigate=useNavigate()

  useEffect(() => {
    dispatch(getsongsfetch());
  }, [dispatch]);


  const handleDelete = (id:string) => {
    console.log('Deleting song with id:', id);
      dispatch(deleteSong(id));
  };
  //update function
  const handleUpdate = (id: string) => {
    console.log('Updated id:', id);
    setIsUpdate(true);
    setUpdateId(id);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(updateSong(formData));
    setFormData({
      _id: "",
      title: "",
      artist: "",
      album: "",
      genre: "",
    });
    setIsUpdate(false);
  };
  // Handle songs being undefined or empty array
  if (!songs || songs.length === 0) {
    return <div>No songs available.</div>;
  }

  return (
    <StyledContainer>
      <h2>Song List</h2>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Song Title</StyledTh>
            <StyledTh>Artist</StyledTh>
            <StyledTh>Album</StyledTh>
            <StyledTh>Genre</StyledTh>
            <StyledTh>Action</StyledTh>
          </tr>
        </thead>
        <tbody>
          {songs.map((song,index) => {
            // console.log('Song ID:', song._id); // Log the id
            return(
            <tr key={song._id ? song._id : index}>
              <StyledTd>{song.title}</StyledTd>
              <StyledTd>{song.artist}</StyledTd>
              <StyledTd>{song.album}</StyledTd>
              <StyledTd>{song.genre}</StyledTd>
              <StyledTd>
                <DeleteButton onClick={() => handleDelete(song._id)}>
                  Delete
                </DeleteButton>
                <UpdateButton onClick={() => handleUpdate(song._id)}>
                  Update
                </UpdateButton>
              </StyledTd>
            </tr>)
})}
        </tbody>
      </StyledTable>
      {isUpdate && updateId && (
        
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
              <FormButton type="submit">update</FormButton>
            </form>
          </FormContainer>
        
      )}
    </StyledContainer>
  );
};

export default SongList;