/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { getsongsfetch,deleteSong } from '../store/features/songSlice';
import { useAppSelector, useAppDispatch } from './../store/store';

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
`;

const SongList = () => {
  const dispatch = useAppDispatch();
  const songs = useAppSelector((state) => state.songs.songs);
  // const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    dispatch(getsongsfetch());
  }, [dispatch]);

  const handleDelete = (id:string) => {
    // You should dispatch an action to handle deletion in your Redux store
    dispatch(deleteSong(id));
  
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
          {songs.map((song,index) => (
            <tr key={song.id ? song.id : index}>
              <StyledTd>{song.title}</StyledTd>
              <StyledTd>{song.artist}</StyledTd>
              <StyledTd>{song.album}</StyledTd>
              <StyledTd>{song.genre}</StyledTd>
              <StyledTd>
                {/* Include alt attribute for accessibility */}
                <StyledButton onClick={() => handleDelete(song.id)}>
                  Delete
                </StyledButton>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledContainer>
  );
};

export default SongList;