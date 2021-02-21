import React from 'react'
import './ClassMates.css';
import {Button} from './Button';
import '../App.css';

function Chat() {
    return (
      <div className='hero-container'>
        <p>Friend 1</p>
        <p>Friend 2</p>
        <p>Friend 3</p>
        <p>Friend 4</p>
        <p>Friend 5</p>
        

        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            Match!
          </Button>
        </div>
      </div>
    );
  }

export default Chat;