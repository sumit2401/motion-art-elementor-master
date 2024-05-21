import React from 'react';
import './tag.css';
import img1 from '../assests/p5.png';

const tag = () => {
  return (
    <div className='tag'>
        <div className='wand-text'>
            <div><h2>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h2></div>
            <div><p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p></div>
            <div><button className='gradiant-btn'>Purchase From Envato </button></div>
        </div>
        <div className='wand'>
            <div></div>
            <div><img src={img1} alt="" /></div>
        </div>
    </div>
  )
}

export default tag;