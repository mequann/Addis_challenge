/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import React from 'react';

const StyledHome = styled.div`
  nav {
    background-color: #333;
    padding: 10px;
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      li {
        margin-right: 120px;
        margin-left: 120px;
        color: white;
        cursor: pointer;
        a {
          text-decoration: none;
          color: white;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <nav>
        <ul>
          <li>
            <Link to="/song-list">Song List</Link>
          </li>
          <li>
            <Link to="/add-song">Add Song</Link>
          </li>
          <li>
            <Link to="/update-song">Update Song</Link>
          </li>
        </ul>
      </nav>
    </StyledHome>
  );
};

export default Home;