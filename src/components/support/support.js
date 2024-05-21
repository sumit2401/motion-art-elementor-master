import React from 'react';
import './support.css';
import img from '../assests/p8.png'

const support = () => {
  return (
    <div className='support'>
        <h2 className='suph'>Supported by All Popular Browsers</h2>
        <p className='para'>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
        <img className='supimg' src={img} alt="" />
    </div>
  )
}

export default support;