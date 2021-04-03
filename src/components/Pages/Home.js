import React from 'react';
import Hero from '../Hero/Hero'
import Instruction from '../Hero/Instruction'

function Home() {
    return(
      <div className='home-wrapper'>
        <Hero h1='What it is?' p='This is a website that will help you choose a car by comparing the characteristics of many models!'/>
        <Hero h1='How to use it?' p='Just follow the instructions below and enjoy!' />
        <Instruction />
      </div>
      );
}

export default Home;