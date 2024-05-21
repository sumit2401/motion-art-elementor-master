import React from 'react';
import './plugin.css';
import img1 from '../assests/p9.png';
import img2 from '../assests/p10.png';
import img3 from '../assests/p11.png';

const plugin = () => {
  return (
    <div className='parent'>
        <div className='main'>
            <h2 className='heading-main'>An All-Round Plugin With Powerful Features</h2>
            <p className='para-main'>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
        </div>
        <div className='fleximg'>
            <div className='card'>
                <div className='card-gap'><img className='imgsec' src={img1} alt="" /></div>
                <div className='card-gap'>
                    <h2 className='subHeading'>Light Weight</h2>
                    <p className='subPara'>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
            </div>
            <div className='card'>
                <div className='card-gap'><img className='imgsec' src={img2} alt="" /></div>
                <div className='card-gap'>
                    <h2 className='subHeading'>100% Responsive</h2>
                    <p className='subPara'>Create a consistent visual experience across all devices.</p>
                </div>
            </div>
            <div className='card'>
                <div className='card-gap'><img className='imgsec' src={img3} alt="" /></div>
                <div className='card-gap'>
                    <h2 className='subHeading'>User Friendly Interface</h2>
                    <p className='subPara'>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default plugin;