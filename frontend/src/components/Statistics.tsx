/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import React from 'react';
import { useAppSelector } from '../store/store';

const StyledContainer = styled.div`
  margin: 20px;
`;

const StyledHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
`;

const Statistics = () => {
  const songs = useAppSelector((state) => state.songs.songs);

  // Add logic to calculate and display statistics data
  const totalSongs = songs.length;

  return (
    <StyledContainer>
      <StyledHeading>Statistics</StyledHeading>
      <StyledParagraph>Total Songs: {totalSongs}</StyledParagraph>
    </StyledContainer>
  );
};

export default Statistics;
