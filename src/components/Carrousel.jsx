import React from 'react';
import '../assets/styles/components/Carrousel.scss';

const Carrousel = ({ children }) => (
  <div className='carrousel'>
    <div className='carrousel__container'>
      {children}
    </div>
  </div>
);

export default Carrousel;

