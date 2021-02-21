import React from 'react'
import './Profile.css';
import {Button} from './Button';
import '../App.css';

function Profile() {
    return (
      <div className='hero-container'>
        <h1>Billy Joe</h1>
        <p>Interests:</p>
        <b>Basketball, Volleyball, Movies</b>
        <p>Strengths:</p>
        <b>Turing Machine, HashMaps</b>
        <p>Weaknesses:</p>
        <b>Huffman Coding</b>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }

export default Profile;