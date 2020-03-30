import React, { Component } from "react";
import taggedLogo from '../Assets/taggedLogo.png'
import '../App.scss'

function Tagged() {
  return (
  <header className='header'>
      <h1 className='tagged'>TAGGED</h1>
       
      <img className='logo'  src={taggedLogo} alt="image"/>
    
  </header>
  );
}

export default Tagged
