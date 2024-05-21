import React from 'react';
import './footer.css';

const footer = () => {
  return (
    <footer className="footer">
            <p className='para-footer'>2023 copyright</p>
            <ul>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#support">Support</a></li>
            </ul>
        </footer>
  )
}

export default footer;