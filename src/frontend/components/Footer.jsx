import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className={
      location.pathname === '/register' ||
      location.pathname === '/login' ?
        'footer footer__register-login' :
        'footer'
    }>
      <a href='/'>Términos de uso</a>
      <a href='/'>Declaración de privacidad</a>
      <a href='/'>Centro de ayuda</a>
    </footer>
  );
};

export default Footer;
