import React from 'react'
import './HeroSection.css';
import {Button} from './Button';
import '../App.css';

function HeroSection() {
    return (
      <div className='hero-container'>
        <h1>This is the future.</h1>
        <p>Miss meeting friends in class?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Log In
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            Sign Up 
          </Button>
        </div>
      </div>
    );
  }

export default HeroSection;