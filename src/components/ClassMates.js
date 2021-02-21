import React from 'react'
import './ClassMates.css';
import {Button} from './Button';
import '../App.css';

function ClassMates() {
    return (
      <div className='hero-container'>
        <h1>CSE 100: Advanced Data Structures</h1>

        <div className='hero-btns'>
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            New Class
          </Button>
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

export default ClassMates;